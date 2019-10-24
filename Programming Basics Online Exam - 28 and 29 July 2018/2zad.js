function beerAndChips(input)
{
    let name = input.shift();
    let budget = Number(input.shift());
    let beerBottles = Number(input.shift());
    let chipsPackages = Number(input.shift());

    let beerPrice = beerBottles * 1.20;
    let chipsPriceForOnePackage = beerPrice * 0.45;
    let chipsPrice = Math.ceil(chipsPriceForOnePackage * chipsPackages);
    let totalSum = beerPrice + chipsPrice;
    let diff = (Math.abs(budget - totalSum).toFixed(2));
    
    if(totalSum <= budget){
        console.log(`${name} bought a snack and has ${diff} leva left.`);
    }
    else{
        console.log(`${name} needs ${diff} more leva!`)
    }
}
beerAndChips(['George', 10, 2, 3])