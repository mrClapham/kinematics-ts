import Vector from '../src/js/utils/Vector.ts';

describe("lineCoords", () => {
    it("Should return an object with the correct values", () => {
        let v = Vector.lineCoords(10, 10, 30, 45);
        let v2 = Vector.lineCoords(20, 30, 30, 45);

        expect(v.startX).toEqual(10);
        expect(v.startY).toEqual(10);
        expect(v2.startX).toEqual(20);
        expect(v2.startY).toEqual(30);
    });

it("Should correctly calculate the end X and Y positions", ()=>{
    let startX = 10;
    let startY = 10;
    let width = 4;
    let height = 4;
    let length = Math.sqrt((width*width) + (height*height));
    let angle = 45;
    let v = Vector.lineCoords(startX, startY, length, angle);
    expect(v.endX).toEqual(14);
});

});