/**
 *
 * Title: gamesense styled watermark
 * Author: leed
 *
*/

// WIP
var frametimes = []
var fps_prev = 0
var value_prev = []
var last_update_time = 0
// WIP

const window_x = UI.AddSliderInt("window_x", 0, Global.GetScreenSize()[0])
const window_y = UI.AddSliderInt("window_y", 0, Global.GetScreenSize()[1])

function update_menu()
{
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "window_x", false)
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "window_y", false)
}
update_menu();

/**
 * Checks if a point is inside a perimeter
 *
 * @param vec
 * @param x
 * @param y
 * @param x2
 * @param y2
 * @returns {boolean}
 */
function is_draging(vec, x, y, x2, y2)
{
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

function main()
{
   const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "window_x");
   const y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "window_y");         
   const ping = Math.floor(Global.Latency() * 1000 / 1.5);
   const fps = Math.floor( 1 / Global.Frametime() );
   var today = new Date();
   if (today.getMinutes() > 9)
   {
        var time = today.getHours() + ":" + today.getMinutes()
   }
   else
   {
        var time = today.getHours() + ":" + "0" + today.getMinutes()
   }
   
   if (UI.GetValue("[LEED] Enable onetap watermark") == true) 
   {
       UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Watermark", false);
       if (ping > 100) 
       {
           Render.Rect(x + 0, y + 9, 222, 35, [2, 2, 2, 100]);
           Render.FilledRect(x + 1, y + 10, 220, 35, [55, 55, 55, 200]);
           Render.Rect(x + 6, y + 15, 210, 25, [2, 2, 2, 100]);
           Render.FilledRect(x + 6, y + 15, 210, 25, [25, 25, 25, 200]);
           Render.FilledRect(x + 6, y + 15, 210, 3, [217, 157, 86, 255]);
           Render.String(x + 11, y + 24, 0, "one", [255, 255, 255, 255], 8);
           Render.String(x + 33, y + 24, 0, "tap", [217, 157, 86, 255], 8);
           Render.String(x + 50, y + 24, 0, " | " +
           fps +
           " fps" + 
           " |  " + 
           ping + 
           "ms" +
           " | " + 
           time, [255, 255, 255, 200], 8);
       }
       else
       {
           Render.Rect(x + 0, y + 9, 215, 35, [2, 2, 2, 100]);
           Render.FilledRect(x + 1, y + 10, 213, 35, [55, 55, 55, 200]);
           Render.Rect(x + 6, y + 15, 203, 25, [2, 2, 2, 100]);
           Render.FilledRect(x + 6, y + 15, 203, 25, [25, 25, 25, 200]);
           Render.FilledRect(x + 6, y + 15, 203, 3, [217, 157, 86, 255]);
           Render.String(x + 11, y + 24, 0, "one", [255, 255, 255, 255], 8);
           Render.String(x + 33, y + 24, 0, "tap", [217, 157, 86, 255], 8);
           Render.String(x + 50, y + 24, 0, " | " +
           fps +
           " fps" + 
           " |   " + 
           ping + 
           "ms" +
           " | " + 
           time, [255, 255, 255, 200], 8);
       }
       if (Global.IsKeyPressed(1)) {
           const mouse_xy = Global.GetCursorPosition();
           if (is_draging(mouse_xy, x, y, x + 200, y + 30)) {
               UI.SetValue("Misc", "JAVASCRIPT", "Script items", "window_x", mouse_xy[0] - 100);
               UI.SetValue("Misc", "JAVASCRIPT", "Script items", "window_y", mouse_xy[1] - 20);
           }
       }
    }
}

// Callback our main function & stuff
UI.AddCheckbox("[LEED] Enable onetap watermark")
Global.PrintColor([186, 235, 52, 255], "\n\nLEED's JavaScript loaded!\n\n\n")
Global.RegisterCallback("Draw", "main")
