function  triangleArea(input)
{
    let a = Number(input.shift());
    let h = Number(input.shift());

    let S = a * h / 2;
    console.log(S.toFixed(2));
} 
triangleArea(['20', '30']);
triangleArea([15, 35]);
triangleArea([7.75, 8.45]);
triangleArea([1.23456, 4.56789])