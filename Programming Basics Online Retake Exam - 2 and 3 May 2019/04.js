function touristShop(input)
{
    let budget = Number(input.shift());
    let product = input.shift();
    let price = Number(input.shift());
    let productNum = 0;
    let productPrice = 0;
    while(product != 'Stop'){
        productNum++;
        if(productNum % 3 == 0){
            price /= 2;
        }
        productPrice += price;
        if(budget >= price){
            budget -= price;
        }
        else{
            price -= budget; 
            break;
        } 
        product = input.shift();
        price = Number(input.shift());
    }
    if(product == 'Stop'){
        console.log(`You bought ${productNum} products for ${productPrice.toFixed(2)} leva.`);
    }
    else{
        console.log("You don't have enough money!");
        console.log(`You need ${price.toFixed(2)} leva!`);
    }

}
touristShop([153.20, 'Backpack', 25.20, 'Shoes', 54, 'Sunglasses', 30, 'Stop']);
touristShop([54, 'Backpack', 24, 'Shoes', 45, 'Sunglasses'])