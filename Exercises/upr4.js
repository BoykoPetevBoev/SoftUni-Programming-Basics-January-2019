function tailoringWorkshop(input)
{
    let tables = Number(input.shift()); 
    let tableLength =Number(input.shift());
    let tableWidth = Number(input.shift());
    
    let roofingArea = tables * (tableLength + 2 * 0.30) * (tableWidth + 2 * 0.30);
    let coachArea = tables * (tableLength / 2) * (tableLength / 2);

    let USD = (roofingArea * 7 + coachArea * 9);
    let BGN = (USD * 1.85);
    console.log(`${USD.toFixed(2)} USD`);
    console.log(`${BGN.toFixed(2)} BGN`);
}
tailoringWorkshop([5, 1.00, 0.50]);
tailoringWorkshop([10, 1.20, 0.65]);