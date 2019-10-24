function equalNumbers(input)
{
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let ab = 0;
    if(a == b)
    {
        ab = a
    }
    if(ab == c)
    {
        console.log('yes')
    }
    else
    {
        console.log('no')
    }
}
equalNumbers([5, 5, 5]);
equalNumbers([5, 4, 5]);
equalNumbers([1, 2, 3]);
equalNumbers([2, 2, 130]);

