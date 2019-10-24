function skiTrip(input)
{
    let  days = Number(input.shift());
    let room = input.shift();
    let grade = input.shift();

    price = 0;
    if(room == 'room for one person'){
         price = (days - 1) * 18;
    }
    else if(room == 'apartment'){
        price = (days - 1) * 25;
        if(days < 10){
            price *= 0.7;
        }
        else if(days > 15){
            price *= 0.5;
        }
        else{
            price *= 0.65;
        }
    }
    else if(room == 'president apartment'){
        price = (days - 1) * 35;
        if(days < 10){
            price *= 0.9;
        }
        else if(days > 15){
            price *= 0.8;
        }
        else{
            price *= 0.85;
        }
    }
    if(grade == 'positive'){
        price *= 1.25;
    }
    else if(grade == 'negative'){
        price *= 0.9;
    }
    console.log(price.toFixed(2));
}
skiTrip([14, 'apartment', 'positive'])