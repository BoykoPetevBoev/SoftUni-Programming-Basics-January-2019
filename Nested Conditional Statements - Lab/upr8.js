function skiTrip(input)
{
    let days = parseInt(input.shift());
    let roomType = input.shift();
    let evaluation = input.shift();

    let price = 0;
    let sleepover = days - 1;
    if(roomType == 'room for one person'){
          price = sleepover * 18;
    }
    else if(roomType == 'apartment'){
        if(days < 10){
            price = sleepover * 25 * 0.7;
        }
        else if(days > 15){
            price = sleepover * 25 * 0.5;
        }
        else{
            price = sleepover * 25 * 0.65;
        }
    }
    else if(roomType == 'president apartment'){
        if(days < 10){
            price = sleepover * 35 * 0.9;
        }
        else if(days > 15){
            price = sleepover * 35 * 0.8;
        }
        else{
            price = sleepover * 35 * 0.85;
        }
    } 
    if(evaluation == 'positive'){
        price *=  1.25;
    } 
    else if(evaluation == 'negative'){
        price *= 0.9;
    }
    console.log(price.toFixed(2));
}
skiTrip(['14', 'apartment', 'positive']);
//skiTrip(input)
//skiTrip(input)
//skiTrip(input)