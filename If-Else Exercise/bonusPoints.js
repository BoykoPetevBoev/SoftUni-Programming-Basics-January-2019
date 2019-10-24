function bonusPoints([arg])
{
    let num = parseInt(arg);
    let BP1 = 0;
    let BP2 = 0;
    let BP3 = 0;
    let BP4 = 0;
    let BP5 = 0;
    if(num >= 100)
    {
        BP1 = 5;
    }
    if(num > 100)
    {
        BP2 = num * 0.2;
    }
    if(num > 1000)
    {
        BP3 = num * 0.1;
    }
    if(num % 2 ==0)
    {
        BP4++;
    }
    if(num / 5 == 0)
    {
        BP5 += 2;
    }
    let BP = BP1 + BP2 + BP3 + BP4 + BP5;
    console.log(BP);
    console.log(num + BP);
}
bonusPoints([20]);
bonusPoints([175]);
bonusPoints([2703]);
bonusPoints([15875]);