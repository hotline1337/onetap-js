/**
 *
 * Title: Eso glow chams
 * Author: leed
 * Credits: VexatiousCheff for material helper js and most of the code
*/

var helper = require("module/material_helper.js")

Material.Create("Eso Glow")
UI.AddColorPicker("Eso Glow color");

function onMat(){
    var mat_index = Material.Get("Eso Glow")
    var color = UI.GetColor("Misc", "JAVASCRIPT", "Script Items", "Eso Glow color");
    var envmap_int = "[" + (color[0]/255.0).toString() + " " + (color[1]/255.0).toString() + " " + (color[2]/255.0).toString() + "]";
    helper.setMat(mat_index, {
        envmap: "models/effects/cube_white",
        envmaptint: envmap_int,
        envmapfresnel: "1",
        envmapfresnelminmaxexp: "[0 1 2]",
        alpha: "1"
    })
    Material.Refresh(mat_index);
}
function onUnload(){
    Material.Destroy("Eso Glow")
}
Cheat.RegisterCallback("Unload", "onUnload")
Cheat.RegisterCallback("Material", "onMat")
