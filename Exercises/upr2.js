function radToDeg(input)
{
    let radians = Number(input.shift());
    let degrees = radians * 180 / Math.PI;
    console.log(degrees.toFixed(0));
}
radToDeg([3.1416]);
radToDeg([6.2832]);
radToDeg([0.7854]);
radToDeg([0.5236]);