function isExcellent([arg])
{
    let grade = Number(arg);
    if(grade >= 5.50)
    {
        console.log('Excellent!');
    }
    else
    {
        console.log('Slab si')
    }
}
isExcellent([5.50]);
isExcellent([2.99]);