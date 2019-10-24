function CircleArea([arg])
{
    let r = Number(arg);
    let S = Math.PI * r * r;
    let P = 2 * Math.PI * r;
    console.log("S= " + S);
    console.log('P= ' + P);
}
CircleArea([3])
CircleArea([4.5])