function conversionUSDtoBGN([USD])
{
    let BGN = (USD * 1.79549).toFixed(2);
    console.log('BGN= ' + BGN);
}
conversionUSDtoBGN([20]);
conversionUSDtoBGN([100]);
conversionUSDtoBGN([12.5]);

