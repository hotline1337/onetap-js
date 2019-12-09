/**
 *
 * Title: Chat cleaner/spammer
 * Author: leed
 *
*/

var text = "﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ";
var Button = "Enable chat cleaner";

var flDelayTime = 0;

function Spam() {
    if (UI.GetValue(Button)) 
    {
        if (Globals.Curtime() >= flDelayTime) 
        {
            Cheat.ExecuteCommand("say " + text);
            flDelayTime = Globals.Curtime() + 0.675;
        }
    }
}

UI.AddCheckbox(Button);
Cheat.RegisterCallback("FrameStageNotify", "Spam");

