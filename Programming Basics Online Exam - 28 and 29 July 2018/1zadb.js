function tripToWorldCup(input)
{
    let ticketPriceToGo = Number(input.shift());
    let ticketPriceToGoBack = Number(input.shift());
    let ticketPriceForMatch = Number(input.shift());
    let matchNum = Number(input.shift());
    let discount = Number(input.shift());

    let PriceForSixPremades = (6*(ticketPriceToGo + ticketPriceToGoBack)) * (100- discount)/100;
    let matchPrice = 6 * matchNum * ticketPriceForMatch;
    let totalPrice = (PriceForSixPremades + matchPrice).toFixed(2);
    let totalPriceForPerson = (totalPrice / 6).toFixed(2);

    console.log(`Total sum: ${totalPrice} lv.`);
    console.log(`Each friend has to pay ${totalPriceForPerson} lv.`);
}
tripToWorldCup([175, 280, 125, 5, 15])