function greaterNumber(input)
{
    let a = parseInt(input.shift());
    let b = parseInt(input.shift());

    if (a > b)
    {
        console.log(a);
    }
    else
    {
        console.log(b);
    }
}
greaterNumber([1, 4])