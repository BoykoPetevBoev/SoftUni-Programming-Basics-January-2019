function trapeziodArea(input)
{
    let b1 = Number(input.shift());
    let b2 = Number(input.shift());
    let h = Number(input.shift());

    let S = (b1 + b2) * h / 2;
    console.log(S.toFixed(2));
}
trapeziodArea([8, 13, '7'])
