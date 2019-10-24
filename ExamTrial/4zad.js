function bachelorParty(input)
{
    let sumGostArtist = Number(input.shift());
    let group = input.shift();

    let couvert = 0;
    let guests = 0;
    while(group != 'The restaurant is full'){
        group = Number(group);
        guests += group;
        if(group < 5){
            couvert += (group * 100);
        }
        else{
            couvert += (group * 70);
        }
        group = input.shift();
    }
    if(couvert >= sumGostArtist){
        console.log(`You have ${guests} guests and ${couvert - sumGostArtist} leva left.`);
    }
    else{
        console.log(`You have ${guests} guests and ${couvert} leva income, but no singer.`);
    }
}
bachelorParty([2800, 5, 5, 4, 6, 6, 12, 12, 'The restaurant is full'])