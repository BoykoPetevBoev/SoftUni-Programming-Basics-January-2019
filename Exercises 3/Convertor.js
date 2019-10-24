function currency([amount, from, to])
{
    let BGN = 1;
    let USD = 1.79549;
    let EUR = 1.95583;
    let GBP = 2.53405;
    let to = amount * from;
    console.log(to);

}
currency([20, 'USD', 'BGN']);