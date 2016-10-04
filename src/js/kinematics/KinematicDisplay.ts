import Joint from './Joint.ts' 

let _createCanvas = (target: HTMLElement , width: number, height: number) => {
    let _c = document.createElement('canvas');
    _c.setAttribute('width', String(width));
    _c.setAttribute('height', String(height));
    try {
        target.appendChild(_c);
        return _c;
    } catch (err) {
        console.log("Error creating canvas ", err);
        return null;
    }
};

let KinematicDisplay = {
    _joints:[],
    config: { _canvas: null, width: 800, height: 800 },
    render:function(){
        let ctx = this.getCanvas().getContext("2d");
        this.getJoints().map((d,i)=>{
            d.render(ctx);
        })
    },
    getWidth: function (): number {
        return this.config.width;
    },
    setWidth: function (value) :number {
        if (isNaN(value)) return;
        this.config.width = value
    },
    getHeight: function () : number {
        return this.config.height;
    },
    setHeight: function (value): number {
        if (isNaN(value)) return;
        this.config.height = value
    },
    getTarget: function (): HTMLElement  {
        return this.config.target;
    },
    setTarget: function (value: string) {
        if (document.querySelector("#" + value)) {
            this.config.target = document.querySelector("#" + value);
            this.config._canvas = _createCanvas(this.getTarget(), this.getWidth(), this.getHeight());
        } else {
            throw new Error("There is no DOM element "+ value);
        }
    },
    getCanvas: function () {
        return this.config._canvas
    },
    getJoints:function(){
        return this._joints;
    },
    addJoint:function(config = {}){
        let j = Joint.create(config);

        if( this._joints.length > 0){
            j.setParent(this._joints[this._joints.length - 1]);
        }
        this._joints.push(j);
    }
};

export default {
    create: (target) => {
        let k = Object.create(KinematicDisplay);
        if (target) k.setTarget(target);
        return k;
    }
}