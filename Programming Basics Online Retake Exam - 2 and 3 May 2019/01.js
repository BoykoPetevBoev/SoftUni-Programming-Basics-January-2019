function foodDelivery(input)
{
    let chikenMenu = Number(input.shift());
    let fishMenu = Number(input.shift());
    let vegetableMenu = Number(input.shift());

    let chikenMenuPrice = chikenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegetableMenuPrice = vegetableMenu * 8.15;

    let menuPrice = chikenMenuPrice + fishMenuPrice + vegetableMenuPrice;
    let desert = menuPrice * 0.2;
    let delivery = 2.5;

    let total = menuPrice + desert + delivery;
    console.log(`Total: ${total.toFixed(2)}`);
}
foodDelivery(['2', '4', '3']);