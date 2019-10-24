function footballSouvenirs(input)
{
    let team = input.shift();
    let souvenirs = input.shift();
    let souvenirsSold = Number(input.shift());

    let totalSum = 0;
    if(team == 'Argentina'){
        if(souvenirs == 'flags'){
            totalSum = souvenirsSold * 3.25;
        }
        else if(souvenirs == 'caps'){
            totalSum = souvenirsSold * 7.20;
        }
        else if(souvenirs == 'posters'){
            totalSum = souvenirsSold * 5.10;
        }
        else if(souvenirs == 'stickers'){
            totalSum = souvenirsSold * 1.25;
        }
        else{
            console.log('Invalid stock!');
        }
    }
    else if(team == 'Brazil'){
        if(souvenirs == 'flags'){
            totalSum = souvenirsSold * 4.20;
        }
        else if(souvenirs == 'caps'){
            totalSum = souvenirsSold * 8.50;
        }
        else if(souvenirs == 'posters'){
            totalSum = souvenirsSold * 5.35;
        }
        else if(souvenirs == 'stickers'){
            totalSum = souvenirsSold * 1.20;
        }
        else{
            console.log('Invalid stock!');
        }
    }
    else if(team == 'Croatia'){
        if(souvenirs == 'flags'){
            totalSum = souvenirsSold * 2.75;
        }
        else if(souvenirs == 'caps'){
            totalSum = souvenirsSold * 6.90;
        }
        else if(souvenirs == 'posters'){
            totalSum = souvenirsSold * 4.95;
        }
        else if(souvenirs == 'stickers'){
            totalSum = souvenirsSold * 1.10;
        }
        else{
            console.log('Invalid stock!');
        }
    }
    else if(team == 'Denmark'){
        if(souvenirs == 'flags'){
            totalSum = souvenirsSold * 3.10;
        }
        else if(souvenirs == 'caps'){
            totalSum = souvenirsSold * 6.50;
        }
        else if(souvenirs == 'posters'){
            totalSum = souvenirsSold * 4.80;
        }
        else if(souvenirs == 'stickers'){
            totalSum = souvenirsSold * 0.90;
        }
        else{
            console.log('Invalid stock!');
        }
    }
    else{
        console.log('Invalid country!');
    }
    if(totalSum != 0){
        console.log(`Pepi bought ${souvenirsSold} ${souvenirs} of ${team} for ${totalSum.toFixed(2)} lv.`);
    }  
}
footballSouvenirs(['Brazil', 'sticrs', 5])