function alcoholMarket(input)
{
    let whiskeyPrice = Number(input.shift());
    let beerLiters = Number(input.shift());
    let wineLiters = Number(input.shift());
    let rakijaLiters = Number(input.shift());
    let whiskeyLiters = Number(input.shift());

    let rakijaPrice = whiskeyPrice / 2;
    let whinePrice = rakijaPrice * 0.6;
    let beerPrice = rakijaPrice * 0.2;

    let rakija = rakijaLiters * rakijaPrice;
    let wine = wineLiters * whinePrice;
    let beer = beerLiters * beerPrice;
    let whiskey = whiskeyLiters * whiskeyPrice;
    let total = (rakija + wine + beer + whiskey).toFixed(2);

    console.log(total);
} 
alcoholMarket([50, 10, 3.5, 6.5, 1]);
alcoholMarket([63.44,])