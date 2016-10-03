import Joint from './Joint.ts' 

let _createCanvas = (target, width, height) => {
    let _c = document.createElement('canvas');
    _c.setAttribute('width', width);
    _c.setAttribute('height', height);
    try {
        target.appendChild(_c)
    } catch (err) {
        console.log("Error creating canvas ", err)
    }
};

let KinematicDisplay = {
    _joints:[],
    config: { _canvas: null, width: 800, height: 800 },
    render:function(){
        this.getCanvas()
    },
    getWidth: function () {
        return this.config.width;
    },
    setWidth: function (value) {
        if (isNaN(value)) return;
        this.config.width = value
    },
    getHeight: function () {
        return this.config.height;
    },
    setHeight: function (value) {
        if (isNaN(value)) return;
        this.config.height = value
    },
    getTarget: function () {
        return this.config.target;
    },
    setTarget: function (value) {
        let _t = document.querySelector("#" + value);
        console.log("THE TARGET IS ", _t);
        if (document.querySelector("#" + value)) {
            this.config.target = document.querySelector("#" + value);
            _createCanvas(this.getTarget(), this.getWidth(), this.getHeight());
        } else {
            //throw new Error("There is no DOM element "+ value);
        }
    },
    getCanvas: function () {
        return this.config._canvas
    },
    getJoints:function(){
        return this._joints;
    },
    addJoint:function(config = {}){
        this._joints.push(Joint.create(config));
    }
};

export default {
    create: (target) => {
        let k = Object.create(KinematicDisplay);
        if (target) k.setTarget(target);
        return k;
    }
}