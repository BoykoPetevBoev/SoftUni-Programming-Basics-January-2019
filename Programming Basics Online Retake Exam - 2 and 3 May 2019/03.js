function submitASolution(input) {
    let contractDate = input.shift();
    let contractType = input.shift();
    let internet = input.shift();
    let months = Number(input.shift());

    let tax = 0;
    let internetPrice = 0;
    let discount = false;
    if (contractDate == 'one') {
        if (contractType == 'Small') {
            tax = 9.98;
        }
        else if (contractType == 'Middle') {
            tax = 18.99;
        }
        else if (contractType == 'Large') {
            tax = 25.98;
        }
        else if (contractType == 'ExtraLarge') {
            tax = 35.99;
        }
    }
    else if (contractDate == 'two') {
        discount = true;
        if (contractType == 'Small') {
            tax = 8.58;
        }
        else if (contractType == 'Middle') {
            tax = 17.09;
        }
        else if (contractType == 'Large') {
            tax = 23.59;
        }
        else if (contractType == 'ExtraLarge') {
            tax = 31.79;
        }
    }
    if(internet == 'yes'){
        if(tax <= 10){
            internetPrice = 5.50;
        }
        else if(tax <= 30){
            internetPrice = 4.35;
        }
        else{
            internetPrice = 3.85;
        }
    }
    let pricePerMonth = tax + internetPrice;
    if(discount){
        pricePerMonth *= 0.9625;
    }
    let totalPrice = pricePerMonth * months;
    console.log(`${totalPrice.toFixed(2)} lv.`)
}
submitASolution(['two', 'Large', 'no', 10])