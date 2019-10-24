function schoolSupplies(input)
{
    let penNum = parseInt(input.shift());
    let markerNum = parseInt(input.shift());
    let liquidLiters = Number(input.shift());
    let reduction = Number(input.shift());

    let penPrice = penNum * 5.80;
    let markerPrice = markerNum * 7.20;
    let liquidPrice = liquidLiters * 1.20;
    let total = penPrice + markerPrice + liquidPrice;
    let result = total * (1 - (reduction / 100));

    console.log(result.toFixed(3));
}
schoolSupplies([2, 3, 2.5, 25]);
schoolSupplies([4, 2, 5, 13]);
