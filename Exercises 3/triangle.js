function TriangleArea([arg1, arg2])
{
    let a = Number(arg1);
    let h = Number(arg2);
    let area = (a * h /2).toFixed(2);
    console.log('Area is: ' + area);
}
TriangleArea([20, 30]);
TriangleArea([15, 35]);
TriangleArea([7.75, 8.45]);
TriangleArea([1.23456, 4.56789])