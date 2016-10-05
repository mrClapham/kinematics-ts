import stringUtils from "./utils/StringHelper.ts";
import KinematicDisplay from './kinematics/KinematicDisplay.ts';
let _content = null, _kd = null;
console.log(stringUtils.reverse("Hello world 123 "));
document.addEventListener("DOMContentLoaded", () => {
    _kd = KinematicDisplay.create("content");
    _kd.addJoint({
        x: 680,
        y: 690,
        length: 80,
        angle: 10,
        step: 2,
        fillColor:   "rgba(255, 0, 255, .7)",
        strokeColor: "rgba(255, 0, 0, .7)"
    });
    _kd.addJoint({
        x: 140,
        y: 150,
        length: 60,
        angle: 10,
        step: 5,
        fillColor:   "rgba(255, 0, 255, .7)",
        strokeColor: "rgba(0, 255, 0, .7)"
    });
    _kd.addJoint({
        x: 40,
        y: 50,
        length: 50,
        angle: 10,
        step: -.3,
        fillColor:   "rgba(255, 0, 255, .7)",
        strokeColor: "rgba(0, 0, 255, .7)"
    });
    console.log(_kd.getCanvas());
    var int = setInterval(()=>{_kd.render()}, 100);
});

