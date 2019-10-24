function bachelorParty(input)
{
    let sumGostArtist = Number(input.shift());
    let group = input.shift();

    if(couvert > sumGostArtist){
        console.log(`You have ${guests} guests and ${couvert - sumGostArtist} leva left.`);
    }
    else{
        console.log(`You have ${guests} guests and ${couvert} leva income, but no singer.`);
    }
}