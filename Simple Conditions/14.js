function timePlusMinuties(input)
{
    let hour = Number(input.shift());
    let minuties = Number(input.shift());
    minuties +=15;

    if(minuties >= 60)
    {
        minuties -= 60;
        hour ++;
    }
    if(hour >= 24)
    {
        hour -=24;
    }
    if(minuties < 10)
    {
        minuties = '0' + minuties;
    }
    console.log(hour + ':' + minuties);
}
timePlusMinuties([1, 46]);
timePlusMinuties([0, 01]);
timePlusMinuties([23, 59]);
timePlusMinuties([11, 08]);
timePlusMinuties([12, 49]);