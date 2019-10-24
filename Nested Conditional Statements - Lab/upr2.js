function smallShop(input)
{
    let product = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());

    let price = 0;
    if(city == 'Sofia'){
        if(product == 'coffee'){
            price = 0.5 * quantity;
        }
        else if(product == 'water'){
            price = 0.8 * quantity;
        }
        else if(product == 'beer'){
            price = 1.2 * quantity;
        }
        else if(product == 'sweets'){
            price = 1.45 * quantity;
        }
        else if(product == 'peanuts'){
            price = 1.6 * quantity;
        }
    }
    else if(city == 'Plovdiv'){
        if(product == 'coffee'){
            price = 0.4 * quantity;
        }
        else if(product == 'water'){
            price = 0.7 * quantity;
        }
        else if(product == 'beer'){
            price = 1.15 * quantity;
        }
        else if(product == 'sweets'){
            price = 1.3 * quantity;
        }
        else if(product == 'peanuts'){
            price = 1.5 * quantity;
        }
    }
    else if(city == 'Varna'){
        if(product == 'coffee'){
            price = 0.45 * quantity;
        }
        else if(product == 'water'){
            price = 0.7 * quantity;
        }
        else if(product == 'beer'){
            price = 1.1 * quantity;
        }
        else if(product == 'sweets'){
            price = 1.35 * quantity;
        }
        else if(product == 'peanuts'){
            price = 1.55 * quantity;
        }
    }
    console.log(price);
}