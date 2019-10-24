function energyBooster(input)
{
    let fruit = input.shift();
    let type = input.shift();
    let num = Number(input.shift());

    let totalPrice = 0;
    if(fruit == 'Watermelon'){
        if(type == 'small'){
            totalPrice = (56 * 2) * num;
        }
        else if(type == 'big'){
            totalPrice = (28.70 * 5) * num;
        }
    }
    else if(fruit == 'Mango'){
        if(type == 'small'){
            totalPrice = (36.66 * 2) * num;
        }
        else if(type == 'big'){
            totalPrice = (19.60 * 5) * num;
        }
    }
    else if(fruit == 'Pineapple'){
        if(type == 'small'){
            totalPrice = (42.10 * 2) * num;
        }
        else if(type == 'big'){
            totalPrice = (24.80 * 5) * num;
        }
    }
    else if(fruit == 'Raspberry'){
        if(type == 'small'){
            totalPrice = (20 * 2) * num;
        }
        else if(type == 'big'){
            totalPrice = (15.20 * 5) * num;
        }
    }
    if(400 <= totalPrice && totalPrice <= 1000){
        totalPrice *= 0.85;
    }
    else if(totalPrice > 1000){
        totalPrice *= 0.5;
    }
    console.log(totalPrice.toFixed(2) + ' lv.')
}
energyBooster(['Watermelon', 'big', 4])