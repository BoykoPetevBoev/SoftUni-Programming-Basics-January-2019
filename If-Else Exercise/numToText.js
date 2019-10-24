function numberToText([arg])
{
    let a = Number(arg);
    if(a == 0)
    {
        console.log('zero');
    }
    else if(a == 1)
    {
        console.log('one');
    }
    else if(a == 2)
    {
        console.log('two')
    }
    else if(a == 3)
    {
        console.log('three');
    }
    else if(a == 4)
    {
        console.log('four');
    }
    else if(a == 5)
    {
        console.log('five');
    }
    else if(a == 6)
    {
        console.log('six');
    }
    else if(a == 7)
    {
        console.log('seven');
    }
    else if(a == 8)
    {
        console.log('eight');
    }
    else if(a == 9)
    {
        console.log('nine');
    }
   
    else
    {
        console.log('number too big');
    }
}
numberToText([10])