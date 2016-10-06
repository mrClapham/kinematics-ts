import stringUtils from "./utils/StringHelper.ts";
import KinematicDisplay from './kinematics/KinematicDisplay.ts';
let _content = null, _kd = null;
console.log(stringUtils.reverse("Hello world 123 "));
document.addEventListener("DOMContentLoaded", () => {
    _kd = KinematicDisplay.create("content");
    _kd.addJoint({
        x: 500,
        y: 550,
        length: 100, 
        angle: 0,
        step: .23,
        fillColor:   "rgba(255, 0, 255, .7)",
        strokeColor: "rgba(20, 20, 20, .7)"
    });
    _kd.addJoint({
        x: 600,
        y: 600,
        length: 260,
        angle: 90,
        step: -.47,
        fillColor:   "rgba(255, 0, 255, .7)",
        strokeColor: "rgba(255, 0, 255, .7)"
    });
    
    _kd.addJoint({
        x: 540,
        y: 50,
        length: 50,
        angle: 10,
        step: .9,
        fillColor:   "rgba(255, 0, 255, .7)",
        strokeColor: "rgba(0, 0, 255, .7)"
    });
    
    console.log(_kd.getCanvas());
    var int = setInterval(()=>{_kd.render()}, 10);

    _kd.render()
});

