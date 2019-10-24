function number(input)
{
    let num = parseInt(input.shift());
    if(num < 100)
    {
        console.log('Less than 100');
    }
    else if(num >=100, num <=200)
    {
        console.log('Between 100 and 200');
    }
    else if(num > 200)
    {
        console.log('Greater than 200');
    }
}
number([210])