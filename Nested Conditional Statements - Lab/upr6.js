function fruitShop(input)
{
    let fruit = input.shift();
    let day = input.shift();
    let quantity = Number(input.shift());

    let result = 0;
    if(day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday'){
        if(fruit == 'banana'){
            result = 2.5 * quantity;
        }
        else if(fruit == 'apple'){
            result = 1.2 * quantity;
        }
        else if(fruit == 'orange'){
            result = 0.85 * quantity;
        }
        else if(fruit == 'grapefruit'){
            result = 1.45 * quantity;
        }
        else if(fruit == 'kiwi'){
            result = 2.7 * quantity;
        }
        else if(fruit == 'pineapple'){
            result = 5.5 * quantity;
        }
        else if(fruit == 'grapes'){
            result = 3.85 * quantity;
        }
        else{
            console.log('error');
        }
    }
    else if(day == 'Saturday' || day == 'Sunday'){
        if(fruit == 'banana'){
            result = 2.7 * quantity;
        }
        else if(fruit == 'apple'){
            result = 1.25 * quantity;
        }
        else if(fruit == 'orange'){
            result = 0.9 * quantity;
        }
        else if(fruit == 'grapefruit'){
            result = 1.6 * quantity;
        }
        else if(fruit == 'kiwi'){
            result = 3 * quantity;
        }
        else if(fruit == 'pineapple'){
            result = 5.6 * quantity;
        }
        else if(fruit == 'grapes'){
            result = 4.2 * quantity;
        }
        else{
            console.log('error');
        }
        
    }
    else{
        console.log('error');
    }
    if(result > 0){
    console.log(result.toFixed(2));
    }
}