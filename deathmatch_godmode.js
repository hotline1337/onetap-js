/**
 *
 * Title: Deathmatch Godmode
 * Author: hotline
 *
*/

/* run once */
const run_on_startup = void function()
{
	Cheat.RegisterCallback("CreateMove", "create_move");
}();

const create_move = function()
{
	const game_gun_immunity = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_bGunGameImmunity");
	const game_type = Convar.GetInt("game_type");
	const game_mode = Convar.GetInt("game_mode");
	
	if (!game_gun_immunity || game_type != 1 || game_mode != 2)
		return;
	
	const next_time = 0.0;
	if (next_time <= Globals.Realtime())
	{
		Cheat.ExecuteCommand("open_buymenu");
		next_time = Globals.Realtime() + 0.25;
	}
}
