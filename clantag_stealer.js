/**
 *
 * Title: Clan tag stealer
 * Author: hotline
 *
*/

/* run once */
const run_on_startup = void function()
{
	/* render stuff */
	Render.ShadowedString = function(x, y, align, text, color, font)
	{
		Render.String(x + 1, y + 1, align, text, [10, 10, 10, 125], font);
		Render.String(x, y, align, text, color, font);
	}
	
	/* other stuff */
	this.controller = function()
	{
		switch (arguments[0])
		{
			case String: return "String"; break;
			case null: return "Value"; break;
			default: return "Color"; break;
		}
	}
	Object.defineProperty(Object.prototype, "get", {
		value: function(type) {
			return UI["Get" + controller(type)](this);
		},
		enumerable: false,
		configurable: false
	});
}();

/* variables */
const enabled_prev = 0;
const tag_prev = "";

/* ui stuff */
UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "Clantag stealer");
UI.SetEnabled(["Misc.", "Helpers", "Client", "Clantag changer"], 0);
const path = ["Misc.", "Clantag stealer", "Clantag stealer"];
const dropdown = UI.AddDropdown(path, 'Clantag', ['Off', 'On'], 0);
const online_players = UI.AddDropdown(path, 'Players', [], 1);
const draw_checkbox = UI.AddCheckbox(path, "Draw Current Tag");

/* functions */
const draw_current_tag = function() 
{
	if (!draw_checkbox.get(null))
		return;
		
	const font = Render.AddFont('calibrib.ttf', 24, 100);
	const tag = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayerResource", "m_szClan");
	
	if (tag == "m_szClan" || tag == null)
		tag = "invalid clantag";

	Render.ShadowedString(17, Render.GetScreenSize()[1] - 450, 0, tag.toString(), [255, 255, 255, 255], font);
}

const get_players = function() 
{
	const players = Entity.GetPlayers();
	if (players == null)
		return;
	
	/* sort */
	players.sort();
	
	const players_names = [];
	for (var g in players)
	{
		players_names[g] = Entity.GetName(players[g]).replace(/[^ -~]+/g, "").replace(/\s+/g, " ").trim();
	}
	
	/* update */
	UI.UpdateList(online_players, players_names);
}

const run_tag_animation = function() 
{
	const players = Entity.GetPlayers();
	if (players == null) // check if players exist
		return;
	
	/* sort */
	players.sort();
	
	const index = online_players.get(null);
	if (players[index] != null) 
	{
		const tag = Entity.GetProp(players[index], "CCSPlayerResource", "m_szClan");
		if (tag == "m_szClan" || tag == null) // if tag is invalid -> set it to blank
			tag = "\0";
			
		if (tag != tag_prev) 
		{
			Local.SetClanTag(tag); // set clan tag
		}
		tag_prev = tag;
	}	
	else 
	{
		Local.SetClanTag("\0");
	}
}

const ready_to_set_clantag = function() 
{
	const enabled = dropdown.get(null);
	if (enabled) 
	{
		run_tag_animation()
	}
	else if (enabled_prev) 
	{
		Local.SetClanTag("\0");
	}
	
	enabled_prev = enabled;
}

const on_paint = function() 
{
	if (!Entity.GetLocalPlayer() || World.GetServerString() == "") // if not connected -> empty the player list
	{
		UI.UpdateList(online_players, []); 
		return;
	}
	
	/* loop */
	get_players();
	ready_to_set_clantag();
	draw_current_tag();
}

const on_unload = function() 
{
	UI.SetEnabled(["Misc.", "Helpers", "Client", "Clantag changer"], 1);
	if (enabled_prev)
		Local.SetClanTag("\0");
}

Cheat.RegisterCallback("Draw", "on_paint");
Cheat.RegisterCallback("Unload", "on_unload");