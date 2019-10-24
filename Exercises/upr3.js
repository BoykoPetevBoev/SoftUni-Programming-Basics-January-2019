function rectangleArea(input)
{
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let S = a * b;
    let P = (a + b) * 2;
    console.log(S.toFixed(2));
    console.log(P.toFixed(2));
}
rectangleArea([60, 20, 10, 50]);
rectangleArea([30, 40, 70, -10]);
rectangleArea([600.25, 500.75, 100.50, -200.5])