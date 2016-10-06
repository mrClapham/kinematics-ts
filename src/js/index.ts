import stringUtils from "./utils/StringHelper.ts";
import KinematicDisplay from './kinematics/KinematicDisplay.ts';
let _content = null, _kd = null;
console.log(stringUtils.reverse("Hello world 123 "));
document.addEventListener("DOMContentLoaded", () => {
    _kd = KinematicDisplay.create("content");
    _kd.addJoint({
        show: false,
        x: 500,
        y: 550,
        length: 500, 
        angle: 0,
        step: .3,
        fillColor:   "rgba(45, 232, 141, 1)",
        strokeColor: "rgba(45, 232, 141, 1)"
    });
    _kd.addJoint({
        show: true,
        x: 600,
        y: 600,
        length: 90,
        angle: 90,
        step: -.17,
        fillColor:   "rgba(255, 0, 255, .7)",
        strokeColor: "rgba(45, 232, 141, 1)"
    });
    
    _kd.addJoint({
        x: 540,
        y: 50,
        length: 290,
        angle: 10,
        step: .9,
        fillColor:   "rgba(255, 0, 255, .7)",
        strokeColor: "rgba(45, 232, 141, 1)"
    });
    
    console.log(_kd.getCanvas());
    var int = setInterval(()=>{_kd.render()}, 10);

    _kd.render()
});

