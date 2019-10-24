function footballTeam(input)
{
    let tshirtPrice = Number(input.shift());
    let neededSum = Number(input.shift());

    let shortsPrice =  tshirtPrice * 0.75;
    let socketsPrice = shortsPrice * 0.2;
    let shoesPrice = (tshirtPrice + shortsPrice) * 2;
    let totalSum = (tshirtPrice + shortsPrice + socketsPrice + shoesPrice) * 0.85;

    if(totalSum >= neededSum){
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalSum.toFixed(2)} lv.`);
    }
    else{
        let result = (neededSum - totalSum).toFixed(2);
        console.log(`No, he will not earn the world-cup replica ball.` );
        console.log(`He needs ${result} lv. more. `)
    }
}
footballTeam([25, 100])