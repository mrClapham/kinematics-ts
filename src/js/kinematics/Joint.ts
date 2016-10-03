let Joint = {
    length: 100,
    angle: 10,
    fillColor: "rgba(255, 0, 255)",
    strokeColor: "rgba(255, 0, 255)",
    getFillColor:function(){
        return this.fillColor;
    },
    getAngle: function () {
        return this.angle;
    },
    setAngle: function (value) {
        this.angle = value;
    },
    render:(ctx)=>{
    ctx.beginPath();
    ctx.fillStyle = this.getFillColor();
    // ctx.strokeStyle=colour;
    // ctx.lineWidth = this.guideThickness;
    ctx.fill();
    }
}

export default {
    create: (confg) => {
        let j = Object.create(Joint);
        return j;

    }
}