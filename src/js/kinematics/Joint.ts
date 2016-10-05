import Vector from '../utils/Vector.ts';
//import * as core from  "/root/node_modules/core-js/index.js";
import 'core-js';


let Joint = {
    getX: function (): number {
        return this.config.x
    },
    setX: function (x): void {
        this.config.x = x;
    },
    getY: function (): number {
        return this.config.y
    },
    setY: function (y): void {
        this.config.y = y;
    },
    getStep: function(): number{
        return this.config.step;
    },
    getLength: function (): number {
        return this.config.length;
    },
    getFillColor: function () {
        return this.config.fillColor;
    },
    getStrokColor: function () {
        return this.config.strokeColor;
    },
    getAngle: function () {
        return this.config.angle;
    },
    setAngle: function (value) {
        this.config.angle = value;
    },
    getEndPoint: function (){
        let v = Vector.lineCoords(this.getX(), this.getY(), this.getLength(), this.getAngle());
        return { x: v.endX, y: v.endY };
    },
    setParent:function(value: any){
        this.config.parentJoint = value
    },
    getParent:function(){
        return  this.config.parentJoint || null;
    },
    render: function (ctx) {
        this.setAngle(this.getAngle() + this.getStep())
        let v = Vector.lineCoords(this.getX(), this.getY(), this.getLength(), this.getAngle());
        console.log( "Rendering ---- ", this.getAngle() );
        ctx.beginPath();
        ctx.beginPath();
        ctx.strokeStyle = this.getStrokColor();
        this.getParent() ? ctx.moveTo(this.getParent().getEndPoint().x, this.getParent().getEndPoint().y) : 
                            ctx.moveTo(v.startX, v.startY)  ;
        ctx.lineTo(v.endX, v.endY);
        ctx.stroke();
        ctx.fillStyle = this.getFillColor();
        ctx.lineWidth = this.guideThickness;
        ctx.fill();

    }
}

export default {
    create: (config) => {
        let _config = {
        x: 0,
        y: 0,
        length: 100,
        angle: 10,
        step: 3,
        fillColor: "rgba(255, 0, 255, .7)",
        strokeColor: "rgba(255, 0, 255, .7)"
        };

        let _combinedConfig = (<any>Object).assign(_config, config);

        //If there are any config objects -
        let j = Object.create(Joint);
        j.config = _combinedConfig;

        return j;
    }
}