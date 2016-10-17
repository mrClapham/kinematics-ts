import stringUtils from "./utils/StringHelper.ts";
import KinematicDisplay from './kinematics/KinematicDisplay.ts';
let _content = null, _kd = null;
console.log(stringUtils.reverse("Hello world 123 "));
document.addEventListener("DOMContentLoaded", () => {
    _kd = KinematicDisplay.create("content");
    _kd.addJoint({
        show: false,
        x: 700,
        y: 300,
        length: 300, 
        angle: 0,
        step: .3,
        fillColor:   "rgba(45, 232, 141, 1)",
        strokeColor: "rgba(45, 232, 141, 1)"
    });
    _kd.addJoint({
        show: true,
        x: 0,
        y: 0,
        length: 49,
        angle: 20,
        step: -.17,
        fillColor:   "rgba(255, 0, 255, .7)",
        strokeColor: "rgba(45, 232, 141, 1)"
    });
    
    _kd.addJoint({
        x: 0,
        y: 0,
        length: 390,
        angle: 10,
        step: .9,
        fillColor:   "rgba(255, 0, 255, .7)",
        strokeColor: "rgba(45, 232, 141, 1)"
    });
    
    console.log(_kd.getCanvas());
    var int = setInterval(()=>{_kd.render()}, 10);

    _kd.render()
});

