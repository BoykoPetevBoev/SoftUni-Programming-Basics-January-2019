function exam(input)
{
    let restime = parseInt(input.shift());
    let compPrice = Number(input.shift());
    let softuarePrice = Number(input.shift());
    let coffie = Number(input.shift());

    let relaxtimeLeft = restime - (3 * 2) - 5 -(2 * 2);
    let moneySpend = coffie + (3 * compPrice) + (2 * softuarePrice);
    console.log(moneySpend.toFixed(2));
    console.log(relaxtimeLeft);
    
}
exam([20, 2, 4 , 3])
exam([35, 2.50, 1.20 , 6.30])
exam([40, 16.66, 35 , 4.20])