/**
 *
 * Title: No Fake-Lag while Slow-Walking
 * Author: leed
 *
*/

var EnableIt = '[LEED] Disable fake-lag on slow-walk'
var screen_size = Global.GetScreenSize();

function checkSlowWalk() {
    var swActive = UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Slow walk')
    if (UI.GetValue(EnableIt)) {
    if (swActive) {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", false)
        return
    }
    else {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", true)
        return
    }
  }
}

function drawWarning() {
    var swActive = UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Slow walk')
    if (swActive) {
    Render.String(15 + 2, 500 + 2, 0, "FL", [0, 0, 0, 255], 4)
    Render.String(15, 500, 0, "FL", [195, 13, 35, 255], 4.6);
    }
}


function RegisterCallback()
{
    UI.AddCheckbox(EnableIt)
   Global.RegisterCallback("CreateMove", "checkSlowWalk");
   Global.RegisterCallback("Draw", "drawWarning");
}

RegisterCallback();
