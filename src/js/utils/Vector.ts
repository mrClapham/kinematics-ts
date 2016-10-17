    /**
     * Converts degrees to radians.
     * @param {number} value The degrees value to be converted to radians.
     * @returns {number} The dgree value - converted to radians. 
     */
    var toRadians = (value: number)=> {
        return value * Math.PI / 180;
    },
    lineCoords = (startX: number, startY: number, length: number, angle: number) =>{
        let points = { startX: startX, startY: startY, endX: 0, endY: 0 };
        var radians = toRadians(angle);
        points.endX = startX + (length * Math.cos(radians));
        points.endY = startY + (length * Math.sin(radians));
        return points;
    }

export default {
toRadians: toRadians,
lineCoords: lineCoords
}