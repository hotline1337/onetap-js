/**
 *
 * Title: Bomb timber
 * Author: leed
 * Credits: april for api snippets, Ultranite for providing me armorvalue example
*/

//region api
const global_print = Global.Print, global_print_chat = Global.PrintChat, global_print_color = Global.PrintColor, global_register_callback = Global.RegisterCallback, global_execute_command = Global.ExecuteCommand, global_frame_stage = Global.FrameStage, global_tickcount = Global.Tickcount, global_tickrate = Global.Tickrate, global_tick_interval = Global.TickInterval, global_curtime = Global.Curtime, global_realtime = Global.Realtime, global_frametime = Global.Frametime, global_latency = Global.Latency, global_get_view_angles = Global.GetViewAngles, global_set_view_angles = Global.SetViewAngles, global_get_map_name = Global.GetMapName, global_is_key_pressed = Global.IsKeyPressed, global_get_screen_size = Global.GetScreenSize, global_get_cursor_position = Global.GetCursorPosition, global_play_sound = Global.PlaySound, global_play_microphone = Global.PlayMicrophone, global_stop_microphone = Global.StopMicrophone, global_get_username = Global.GetUsername, global_set_clan_tag = Global.SetClanTag, globals_tickcount = Globals.Tickcount, globals_tickrate = Globals.Tickrate, globals_tick_interval = Globals.TickInterval, globals_curtime = Globals.Curtime, globals_realtime = Globals.Realtime, globals_frametime = Globals.Frametime, sound_play = Sound.Play, sound_play_microphone = Sound.PlayMicrophone, sound_stop_microphone = Sound.StopMicrophone, cheat_get_username = Cheat.GetUsername, cheat_register_callback = cheat_register_callback = new Proxy(Cheat.RegisterCallback, { apply: function(_, _, args) { switch(args[0]) { case 'paint': Cheat.RegisterCallback('Draw', args[1]); break; case 'create_move': Cheat.RegisterCallback('CreateMove', args[1]); break; case 'fsn': Cheat.RegisterCallback('FrameStageNotify', args[1]); break; default: Cheat.RegisterCallback(args[0], args[1]); break; } } }), cheat_execute_command = Cheat.ExecuteCommand, cheat_frame_stage = Cheat.FrameStage, cheat_print = Cheat.Print, cheat_print_chat = Cheat.PrintChat, cheat_print_color = Cheat.PrintColor, local_latency = Local.Latency, local_get_view_angles = Local.GetViewAngles, local_set_view_angles = Local.SetViewAngles, local_set_clan_tag = Local.SetClanTag, local_get_real_yaw = Local.GetRealYaw, local_get_fake_yaw = Local.GetFakeYaw, local_get_spread = Local.GetSpread, local_get_inaccuracy = Local.GetInaccuracy, world_get_map_name = World.GetMapName, world_get_server_string = World.GetServerString, input_get_cursor_position = Input.GetCursorPosition, input_is_key_pressed = Input.IsKeyPressed, render_string = Render.String, render_text_size = Render.TextSize, render_line = Render.Line, render_rect = Render.Rect, render_filled_rect = Render.FilledRect, render_gradient_rect = Render.GradientRect, render_circle = Render.Circle, render_filled_circle = Render.FilledCircle, render_polygon = Render.Polygon, render_world_to_screen = Render.WorldToScreen, render_add_font = Render.AddFont, render_find_font = Render.FindFont, render_string_custom = Render.StringCustom, render_textured_rect = Render.TexturedRect, render_add_texture = Render.AddTexture, render_text_size_custom = Render.TextSizeCustom, render_get_screen_size = Render.GetScreenSize, ui_get_value = UI.GetValue, ui_set_value = UI.SetValue, ui_add_checkbox = UI.AddCheckbox, ui_add_slider_int = UI.AddSliderInt, ui_add_slider_float = UI.AddSliderFloat, ui_add_hotkey = UI.AddHotkey, ui_add_label = UI.AddLabel, ui_add_dropdown = UI.AddDropdown, ui_add_multi_dropdown = UI.AddMultiDropdown, ui_add_color_picker = UI.AddColorPicker, ui_add_textbox = UI.AddTextbox, ui_set_enabled = UI.SetEnabled, ui_get_string = UI.GetString, ui_get_color = UI.GetColor, ui_set_color = UI.SetColor, ui_is_hotkey_active = UI.IsHotkeyActive, ui_toggle_hotkey = UI.ToggleHotkey, ui_is_menu_open = UI.IsMenuOpen, convar_get_int = Convar.GetInt, convar_set_int = Convar.SetInt, convar_get_float = Convar.GetFloat, convar_set_float = Convar.SetFloat, convar_get_string = Convar.GetString, convar_set_string = Convar.SetString, event_get_int = Event.GetInt, event_get_float = Event.GetFloat, event_get_string = Event.GetString, entity_get_entities = Entity.GetEntities, entity_get_entities_by_class_i_d = Entity.GetEntitiesByClassID, entity_get_players = Entity.GetPlayers, entity_get_enemies = Entity.GetEnemies, entity_get_teammates = Entity.GetTeammates, entity_get_local_player = Entity.GetLocalPlayer, entity_get_game_rules_proxy = Entity.GetGameRulesProxy, entity_get_entity_from_user_i_d = Entity.GetEntityFromUserID, entity_is_teammate = Entity.IsTeammate, entity_is_enemy = Entity.IsEnemy, entity_is_bot = Entity.IsBot, entity_is_local_player = Entity.IsLocalPlayer, entity_is_valid = Entity.IsValid, entity_is_alive = Entity.IsAlive, entity_is_dormant = Entity.IsDormant, entity_get_class_i_d = Entity.GetClassID, entity_get_class_name = Entity.GetClassName, entity_get_name = Entity.GetName, entity_get_weapon = Entity.GetWeapon, entity_get_weapons = Entity.GetWeapons, entity_get_render_origin = Entity.GetRenderOrigin, entity_get_prop = Entity.GetProp, entity_set_prop = Entity.SetProp, entity_get_hitbox_position = Entity.GetHitboxPosition, entity_get_eye_position = Entity.GetEyePosition, trace_line = Trace.Line, trace_bullet = Trace.Bullet, usercmd_set_movement = UserCMD.SetMovement, usercmd_get_movement = UserCMD.GetMovement, usercmd_set_angles = UserCMD.SetAngles, usercmd_force_jump = UserCMD.ForceJump, usercmd_force_crouch = UserCMD.ForceCrouch, antiaim_get_override = AntiAim.GetOverride, antiaim_set_override = AntiAim.SetOverride, antiaim_set_real_offset = AntiAim.SetRealOffset, antiaim_set_fake_offset = AntiAim.SetFakeOffset, antiaim_set_l_b_y_offset = AntiAim.SetLBYOffset, exploit_get_charge = Exploit.GetCharge, exploit_recharge = Exploit.Recharge, exploit_disable_recharge = Exploit.DisableRecharge, exploit_enable_recharge = Exploit.EnableRecharge, ragebot_override_minimum_damage = Ragebot.OverrideMinimumDamage, ragebot_override_hitchance = Ragebot.OverrideHitchance, ragebot_override_accuracy_boost = Ragebot.OverrideAccuracyBoost, ragebot_override_multipoint_scale = Ragebot.OverrideMultipointScale, ragebot_force_safety = Ragebot.ForceSafety;
//endregion

var screen_size = global_get_screen_size();
var bombsite, player_name, site = "";
var plating_time = 3.125;
var planting, planted, ignore_dropped, ignore_self = false;
var r = 108, g = 195, b = 18;
var rr = 108, gr = 195, br = 18;
var bomb_beginwhen = null;
const planting_height = 0;
const defuse_height = 0;

//Math functions
function lerp_pos(x1, y1, z1, x2, y2, z2, percentage)
{
    var x = (x2 - x1) + percentage + x1;
    var y = (y2 - y1) + percentage + y1;
    var z = (z2 - z1) + percentage + z1;
    return [x, y, z];
}
function distance3d(x1,y1,z1,x2,y2,z2)
{
    return Math.sqrt((x2-x1)^2+(y2-y1)^2+(z2-z1)^2);
}
function getDefuseTime(bomb_entity)
{
    var defuse_time = entity_get_prop(bomb_entity, "CPlantedC4", "m_flDefuseCountDown") - globals_curtime();
    return Math.max(0, defuse_time);
}
function getBombTime(bomb_entity)
{
    var bomb_time = entity_get_prop(bomb_entity, "CPlantedC4", "m_flC4Blow") - globals_curtime();
    return Math.max(0, bomb_time);
}
function getBombSite(bomb_entity)
{
    return bomb_site = entity_get_prop(bomb_entity, "CPlantedC4", "m_nBombSite") == 1 ? "B" : "A";
}
function getDistanceTo(a, b)
{
    var lx = a[0];
    var ly = a[1];
    var lz = a[2];
    var tx = b[0];
    var ty = b[1];
    var tz = b[2];
    var dx = lx - tx;
    var dy = ly - ty;
    var dz = lz - tz;
 
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
function getDamage(damage, armor_value)
{
    if (armor_value > 0)
    {
        var new_value = damage * .5;
        var armor = (damage - new_value) * .5;
        if (armor > armor_value)
        {
            armor = armor_value * (1 / .5);
            new_value = damage - armor;
        }
        damage = new_value;
    }
    return damage;
}
function getBombDamage(player_entity, bomb_entity)
{
    var player_pos = entity_get_render_origin(player_entity);
    var bomb_pos = entity_get_render_origin(bomb_entity);
    var distance = getDistanceTo(player_pos, bomb_pos);
    const a = 450.7;
    const b = 75.68;
    const c = 789.2;
    const d = ((distance - b) / c);
    var damage = a * Math.exp(-d * d);
    var armor_value = entity_get_prop(player_entity, "CCSPlayerResource", "m_iArmor");

    return Math.max(Math.ceil(getDamage(damage, armor_value)), 0)
}

function draw_defuse_bar()
{
    var y = screen_size[1];
    const c4 = Entity.GetEntitiesByClassID(128)[0];
    var defused_at = entity_get_prop(c4, "CPlantedC4", "m_flDefuseCountDown");
    var defuse_length = entity_get_prop(c4, "CPlantedC4", "m_flDefuseLength");
    const timer = (Entity.GetProp(c4, "CPlantedC4", "m_flC4Blow") - Globals.Curtime()).toFixed(3);
    if (defuse_length > timer)
    {
        return;
    }
    defuse_height = Math.min(y, y * (globals_curtime() - (defused_at - defuse_length)) / defuse_length);
    render_filled_rect(15, 0, 15, render_get_screen_size()[1], [32,32,32,150]);
    render_filled_rect(15, y - defuse_height, 15, y, [79, 163, 227, 255]);
}

function on_paint()
{
    var x = screen_size[0];
    var y = screen_size[1];
    const bomb_entity = entity_get_entities_by_class_i_d(128);
    var bomb = null;

    const c4 = Entity.GetEntitiesByClassID(128)[0];
    if (planting)
    {
        if (player_name != entity_get_name(entity_get_local_player()))
        {
            render_string(17, 2, 0, bombsite + " - " + player_name, [0, 0, 0, 255], 4)
            render_string(15, 0, 0, bombsite + " - " + player_name, [r, g, b, 255], 4)
        }
        planting_height =  Math.min(y, y * (globals_curtime() - bomb_beginwhen) / plating_time);
        render_filled_rect(0, 0, 15, render_get_screen_size()[1], [32,32,32,150]);
        render_filled_rect(0, y - planting_height, 15, y, [rr,gr,br,255]);
    }
    if (planted)
    {
        if (bomb_entity != null)
        {
            bomb = bomb_entity[1];
            var local_player = entity_get_local_player();
            var bomb_time_max = convar_get_float("mp_c4timer");
            const bomb_damage = getBombDamage(local_player, c4);
            var player = entity_get_prop(c4, "CPlantedC4", "m_hBombDefuser");
            if (player == 1)
            {
                draw_defuse_bar();
            }
        }
        const timer = (Entity.GetProp(c4, "CPlantedC4", "m_flC4Blow") - Globals.Curtime()).toFixed(1);
        const planted_text = getBombSite(c4) + " - " + timer.toString() + "s";
        const height = Math.min(y, y * timer/bomb_time_max);

        render_filled_rect(0, 0, 15, render_get_screen_size()[1], [32,32,32,150]);
        render_filled_rect(0, y - height, 15, y, [rr,gr,br,255]);


        render_string(17, 2, 0, planted_text, [0, 0, 0, 255], 4)
        render_string(15, 0, 0, planted_text, [r, g, b, 255], 4)
        if (timer <= 10)
        {
            r = 230,g = 235,b = 145;
        }
        if (timer <= 5)
        {
            r = 255, g = 1, b = 1;
            rr = 255, gr = 1, br = 1;
        }
        if (timer <= 0)
        {
            r = 108, g = 195, b = 18;
            rr = 108, gr = 195, br = 18;
            planted = false;
            planting = false;
            return;
        }
        if (bomb_damage >= 3)
        {
            const damage_text= entity_get_prop(local_player, "CBasePlayer", "m_iHealth") <= bomb_damage ? "FATAL" : "-" + bomb_damage.toString() + " HP";
            const damage_color = entity_get_prop(local_player, "CBasePlayer", "m_iHealth") <= bomb_damage ? [255,1,1,255] : [230,235,145, 255];
            render_string(17, 30, 0, damage_text, [0, 0, 0, 255], 4);
            render_string(15, 28, 0, damage_text, damage_color, 4);
        }
    }
}
const a_site_array = [425, 333, 79, 262, 154, 94, 281, 204, 92, 152];
const b_site_array = [426, 422, 504, 314, 405, 536, 282, 205, 97, 153];
function beginPlant()
{
    var userid = event_get_int("userid");
    site = event_get_int("site");
    if (!userid) return;
    cheat_print("[onetap] Planting on bombsite id: " + event_get_int("site")+"\n");
    if (a_site_array.indexOf(site) > -1)
    {
        site = "A";
    }
    else if (b_site_array.indexOf(site) > -1)
    {
        site = "B";
    }
    else
    {
        return;
    }

    var userid_name = entity_get_entity_from_user_i_d(userid);
    var userid_name_final = entity_get_name(userid_name);

    planting = true;
    bombsite = site;
    player_name = userid_name_final;
    bomb_beginwhen = globals_curtime();
}
function abortPlant()
{
    planting = false;
    planted = false;
    planting_height = 0;
    defuse_height = 0;
}
function bombPlanted()
{
    planting = false;
    planted = true;
}
function reset()
{
    planting = false;
    planted = false;
    planting_height = 0;
    defuse_height = 0;
    site = "";
}
cheat_register_callback("bomb_beginplant", "beginPlant");
cheat_register_callback("bomb_abortplant", "abortPlant");
cheat_register_callback("bomb_planted", "bombPlanted");
cheat_register_callback("bomb_defused", "reset");
cheat_register_callback("round_start", "reset");
cheat_register_callback("Draw", "on_paint");
