import  stringUtils from "./utils/StringHelper.ts";
import KinematicDisplay from './kinematics/KinematicDisplay.ts';
let _content = null, _kd = null;

console.log(stringUtils.reverse("Hello world 123 "));

    document.addEventListener("DOMContentLoaded", ()=>{
        _kd = KinematicDisplay.create("content");
        _kd.addJoint();
        _kd.addJoint({
        x: 40,
        y: 50,
        length: 300,
        angle: 40,
        step: 3,
        fillColor: "rgba(255, 0, 255, .7)",
        strokeColor: "rgba(255, 0, 255, .7)"
        });

        console.log(_kd.getCanvas());
        _kd.render();

        
})

