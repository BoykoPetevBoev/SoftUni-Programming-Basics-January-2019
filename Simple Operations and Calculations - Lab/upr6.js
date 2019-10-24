function circleAreaAndPerimeter(input)
{
    let r = Number(input.shift());
    let S = Math.PI * r * r;
    let P = 2 * Math.PI * r;

    console.log(S.toFixed(2));
    console.log(P.toFixed(2));
}
circleAreaAndPerimeter(['3']);
circleAreaAndPerimeter(['4.5'])