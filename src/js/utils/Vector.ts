
export default  {
toRadians: function(value: number){
        return  value * Math.PI/180;
},
lineCoords: function (startX: number, startY:number, length: number, angle: number){
    let points = {startX: startX, startY: startX, endX:0, endY:0};
        var radians =  this.toRadians(angle);
        points.endX = startX + (length * Math.cos(radians));
        points.endY = startY + (length * Math.sin(radians));
    return points;
}
}