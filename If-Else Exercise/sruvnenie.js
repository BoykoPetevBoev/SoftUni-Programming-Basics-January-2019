function wichIsBigger([arg1, arg2])
{
    let a = Number(arg1);
    let b = Number(arg2);
    if(a > b)
    {
        console.log(a +'>'+ b);
    }
    else if(a == b)
    {
        console.log(a + '=' + b);
    }
    else
    {
        console.log(b + '>' + a);
    }
}
wichIsBigger([2 ,8])
wichIsBigger([47, 12])
wichIsBigger([5.23, 1])
wichIsBigger([2, 2])
wichIsBigger([100, 100])