import Joint from '../src/js/kinematics/Joint.ts';
import KinematicDisplay from '../src/js/kinematics/KinematicDisplay.ts';

var _target = document.createElement('div');
_target.setAttribute("id", "targ");
document.body.appendChild(_target);


describe("Dummy DOM fixtures created", ()=>{
    it("Should have created DOM elements for testing", ()=>{
        expect(document.querySelector('targ')).toBe.truthy;
    })
});

describe("Kinematic Display", ()=>{
    let k = KinematicDisplay.create('targ');
    it("Should return an instance of the KinematicDispaly ", ()=>{
        expect(k).toBe.truthy;
    });

    it("Should throw an Error ", ()=>{
        expect(()=>{ 
                let kb = KinematicDisplay.create("notarg");
        }).toThrow(new Error("There is no DOM element notarg"));
    });

});

describe("The joint component",()=>{
    let j = Joint.create();
    it("Should create a joint.", ()=>{
        expect(j).toBe.truthy
    });
    it("Should allow the angle to be set and got", ()=>{
        j.setAngle(30);
        expect(j.getAngle()).toEqual(30)
    });
});


describe("The KinematicDisplay should allow a joint to be added", ()=>{
    it("Should add a Joint - getJoints sho")
})