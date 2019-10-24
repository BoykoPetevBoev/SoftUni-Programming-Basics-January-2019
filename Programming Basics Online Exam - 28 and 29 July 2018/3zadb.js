function gameStatistics(input)
{
    let minutes= Number(input.shift());
    let name = input.shift();

    if(minutes == 0){
        console.log('Match has just began!');
    }
    else if(minutes < 45){
        console.log('First half time.');
    }
    else if(minutes >= 45){
        console.log('Second half time.');
    }

    if(1 <= minutes && minutes <= 10){
        console.log(`${name} missed a penalty.`);
        if(minutes % 2 == 0){
            console.log(`${name} was injured after the penalty.`);
        }
    }
    else if(10 < minutes && minutes <= 35){
        console.log(`${name} received yellow card.`);
        if(minutes % 2 != 0){
            console.log(`${name} got another yellow card.`);
        }
    }
    else if(35 < minutes && minutes < 45){
        console.log(`${name} SCORED A GOAL !!!`);
    }
    else if(45 < minutes && minutes <= 55){
        console.log(`${name} got a freekick.`);
        if(minutes % 2 == 0){
            console.log(`${name} missed the freekick.`);
        }
    }
    else if(55 < minutes && minutes <= 80){
        console.log(`${name} missed a shot from corner.`);
        if(minutes % 2 != 0){
            console.log(`${name} has been changed with another player.`);
        }
    }
    else if(80 < minutes && minutes <= 90){
        console.log(`${name} SCORED A GOAL FROM PENALTY !!!`);
    }
}
gameStatistics([85 , 'Boyko'])