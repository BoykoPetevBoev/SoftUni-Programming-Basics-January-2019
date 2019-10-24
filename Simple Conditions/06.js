function bonusScore(input)
{
    let num = parseInt(input);
    let bonus = 0;

    if(num <= 100)
    {
        bonus = 5;
    }
    else if(num > 1000)
    {
        bonus = num * 0.1;
    }
    else if(num > 100)
    {
        bonus = num * 0.2;
    }

    if(num % 2 == 0)
    {
        bonus++;
    }
    else if(num % 10 == 5)
    {
        bonus += 2; 
    }
    console.log(bonus);
    console.log(num + bonus);
}
bonusScore(20)