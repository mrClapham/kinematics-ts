import  stringUtils from "./utils/StringHelper.ts";
import KinematicDisplay from './kinematics/KinematicDisplay.ts';
let _content = null, _kd = null;

console.log(stringUtils.reverse("Hello world 123 "));

    document.addEventListener("DOMContentLoaded", ()=>{
        _kd = KinematicDisplay.create("content");
        _kd.addJoint();
        console.log(_kd.getCanvas());
        _kd.render()
})

