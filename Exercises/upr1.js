function convertor(input)
{
    let USD = Number(input);
    let BGN = USD * 1.79549;
    console.log(BGN.toFixed(2));
}
convertor([20]);
convertor([100]);
convertor([12.5]);