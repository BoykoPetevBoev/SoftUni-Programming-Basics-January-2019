function safari(input)
{
    let budget = Number(input.shift());
    let letersFuel = Number(input.shift());
    let day = input.shift();

    let priceFuel = letersFuel * 2.10;
    let total = priceFuel + 100;
    
    if(day == 'Saturday'){
        total *= 0.9;
    }
    else if(day == 'Sunday'){
        total *= 0.8;
    }

    let difference = Math.abs(budget - total);
    if(budget >= total){
        console.log(`Safari time! Money left: ${difference.toFixed(2)} lv.`);
    }
    else{
        console.log(`Not enough money! Money needed: ${difference.toFixed(2)} lv.`);
    }
}
safari([1000, 10, 'Sunday'])
safari([120, 30, 'Saturday'])