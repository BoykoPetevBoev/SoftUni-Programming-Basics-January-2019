function fanShop(input)
{
    let budget = Number(input.shift());
    let num = Number(input.shift());

    let moneyNeeded = 0;
    for(let i = 0; i < num; i++){
        let subject = input.shift();
        if(subject == 'hoodie'){
            moneyNeeded += 30;
        }
        else if(subject == 'keychain'){
            moneyNeeded += 4;
        }
        else if(subject == 'T-shirt'){
            moneyNeeded += 20;
        }
        else if(subject == 'flag'){
            moneyNeeded += 15;
        }
        else if(subject == 'sticker'){
            moneyNeeded += 1;
        }
    }
    let result = Math.abs(moneyNeeded - budget);
    if(moneyNeeded <= budget){
        console.log(`You bought ${num} items and left with ${result} lv.`);
    }
    else{
        console.log(`Not enough money, you need ${result} more lv.`)
    }
}
fanShop([25, 3, 'flag', 'keychain', 'sticker'])