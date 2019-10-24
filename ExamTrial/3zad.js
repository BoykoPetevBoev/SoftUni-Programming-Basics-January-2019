function sushiTime(input)
{
    let sushi = input.shift();
    let restaurantName = input.shift();
    let portion = Number(input.shift());
    let order = input.shift();

    let totalPrice = 0;
    if(restaurantName == 'Sushi Zone'){
        if(sushi == 'sashimi'){
            totalPrice = portion * 4.99;
        }
        else if(sushi == 'maki'){
            totalPrice = portion * 5.29;
        }
        else if(sushi == 'uramaki'){
            totalPrice = portion * 5.99;
        }
        else if(sushi == 'temaki'){
            totalPrice = portion * 4.29;
        }
    }
    else if(restaurantName == 'Sushi Time'){
        if(sushi == 'sashimi'){
            totalPrice = portion * 5.49;
        }
        else if(sushi == 'maki'){
            totalPrice = portion * 4.69;
        }
        else if(sushi == 'uramaki'){
            totalPrice = portion * 4.49;
        }
        else if(sushi == 'temaki'){
            totalPrice = portion * 5.19;
        }
    }
    else if(restaurantName == 'Sushi Bar'){
        if(sushi == 'sashimi'){
            totalPrice = portion * 5.25;
        }
        else if(sushi == 'maki'){
            totalPrice = portion * 5.55;
        }
        else if(sushi == 'uramaki'){
            totalPrice = portion * 6.25;
        }
        else if(sushi == 'temaki'){
            totalPrice = portion * 4.75;
        }
    }
    else if(restaurantName == 'Asian Pub'){
        if(sushi == 'sashimi'){
            totalPrice = portion * 4.50;
        }
        else if(sushi == 'maki'){
            totalPrice = portion * 4.80;
        }
        else if(sushi == 'uramaki'){
            totalPrice = portion * 5.50;
        }
        else if(sushi == 'temaki'){
            totalPrice = portion * 5.50;
        }
    }
    else{
        console.log(`${restaurantName} is invalid restaurant!`);
    }
    if(totalPrice != 0){
        if(order == 'Y'){
            totalPrice *= 1.20;
            console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
        }
        else if(order == 'N'){
            console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
        }
    }
}
sushiTime(['maki', 'Asian Pub', 10, 'Y'])