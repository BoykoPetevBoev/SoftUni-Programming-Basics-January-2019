function rectangleArea([x1, y1, x2, y2])
{
    x1 = Number(x1);
    x2 = Number(x2);
    y1 = Number(y1);
    y2 = Number(y2);
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let S = a * b;
    let P = 2 * (a + b);
    console.log('S= ' + S);
    console.log('P= ' + P);
}

rectangleArea([60, 20, 10, 50]);
rectangleArea([30, 40, 70, -10]);