function transportPrice(input)
{
    let distance = parseInt(input.shift());
    let time = input.shift();

    let taxi = 0;
    let bus = 0;
    let train = 0;

    if(time == 'day'){
        taxi = 0.7 + 0.79 * distance;
    }
    else if(time == 'night'){
        taxi = 0.7 + 0.9 * distance; 
    }
    if(distance >= 20){
        bus = 0.09 * distance;
    }
    if(distance >= 100){
        train = 0.06 * distance;
    }

    let price = 0;
    if(train != 0){
        price = (Math.min(taxi, bus, train)).toFixed(2);
        console.log(price);
    }
    else if(bus != 0){
        price = (Math.min(taxi, bus)).toFixed(2);
        console.log(price);
    }
    else{
        console.log(taxi.toFixed(2));
    }
}
transportPrice([5, 'day']);
transportPrice([7, 'night']);
transportPrice([25, 'day']);
transportPrice([180, 'night']);