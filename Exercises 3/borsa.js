function market([priceVG, priceFR, KgVG, KgFR])
{
    parseFloat(priceVG);
    parseFloat(priceFR);
    parseInt(KgVG);
    parseInt(KgFR);
    let VG = priceVG * KgVG;
    let FR = priceFR * KgFR;
    let Euro = parseFloat((VG + FR) / 1.94);
    console.log(`Daily report: ${Euro} euro`);
}
market([0.194, 19.4, 10, 10]);
market([1.5, 2.5, 10, 10])