function harvest(input)
{
    let area = Number(input.shift());
    let grapePerMeter = Number(input.shift());
    let litersWine = Number(input.shift());
    let workers = Number(input.shift());

    let grapeKG = area * grapePerMeter;
    let grapeForWine = grapeKG * 0.4;
    let wine = grapeForWine / 2.5;

    if(wine > litersWine){
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        let litersLeft = Math.ceil(wine - litersWine);
        let litersPerWorker = Math.ceil(litersLeft / workers);
        console.log(`${litersLeft} liters left -> ${litersPerWorker} liters per person.`);
    }
    else{
        let neededWine = Math.floor(litersWine - wine);
        console.log(`It will be a tough winter! More ${neededWine} liters wine needed.`);
    }

}
harvest([650, 2, 175, 3])
harvest([1020, 1.5, 425, 4])