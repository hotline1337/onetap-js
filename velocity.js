/**
 *
 * Title: Velocity indicator
 * Author: leed
 * Credits: ed for getVelocity function
 *
*/

var SCREEN_SIZE = Global.GetScreenSize()
var x = SCREEN_SIZE[0]
var y = SCREEN_SIZE[1]
var button = "[LEED] Show velocity"
var slider = "Height"

function getVelocity(index)
{
    players = Entity.GetPlayers();
    for (i=0; i < players.length; i++);
    {
        var velocity = Entity.GetProp( index, "CBasePlayer", "m_vecVelocity[0]" );
        var speed = Math.sqrt( velocity[0] * velocity[0] + velocity[1] * velocity[1] );
    }
    
    return speed;
}

function onGround(index)
{
    players = Entity.GetPlayers();
    for (i=0; i < players.length; i++);
    {
        var onground = Entity.GetProp( index, "CBasePlayer", "m_hGroundEntity" );
    }
    
    return onground;
}

function drawVelocity()
{
    if (UI.GetValue(button)) {
        var sint = UI.GetValue(slider);
        var lp = Entity.GetLocalPlayer();
        var velocity = Math.round(getVelocity(lp)).toString();
        var isonground = onGround(lp).toString();

        //Walk velocity
        if (!Global.IsKeyPressed(0x20)) {
            Render.String(x / 2 + 2, y / 2 + sint + 2, 0, velocity, [0, 0, 0, 255], 4)
            Render.String(x / 2, y / 2 + sint, 0, velocity, [108, 195, 18, 255], 4)
        }
        else {
            Render.String(x / 2 + 2, y / 2 + sint + 2, 0, "0", [0, 0, 0, 255], 4)
            Render.String(x / 2, y / 2 + sint, 0, "0", [108, 195, 18, 255], 4)
        }
        //in-air velocity
        if (Global.IsKeyPressed(0x20)) {
            Render.String(x / 2 + 2, y / 2 + sint + 2 - 30, 0, velocity, [0, 0, 0, 255], 4)
            Render.String(x / 2, y / 2 + sint - 30, 0, velocity, [245, 185, 66, 255], 4)
        }
        else {
            Render.String(x / 2 + 2, y / 2 + sint + 2 - 30, 0, "0", [0, 0, 0, 255], 4)
            Render.String(x / 2, y / 2 + sint - 30, 0, "0", [245, 185, 66, 255], 4)
        }
    }
}

UI.AddLabel("--------------------------------------");
UI.AddCheckbox(button);
UI.AddSliderInt(slider, 0, 1000)
UI.AddLabel("--------------------------------------");
Global.RegisterCallback("Draw", "drawVelocity");

