function money([bitcoin, Yuan, commission])
{
    parseInt(bitcoin);
    parseFloat(Yuan);
    parseFloat(commission);
    let BGN1 = bitcoin * 1168;
    let USD = 0.15 * Yuan ;
    let BGN2 = USD * 1.76;
    let EUR = (BGN1 + BGN2) / 1.95;
    let total =  EUR - ((commission * 0.01) * EUR);
    console.log(total.toFixed(2));    


}
money([1, 5, 5]);
money([20, 5678, 2.4]);
money([7, 50200.12, 3]);