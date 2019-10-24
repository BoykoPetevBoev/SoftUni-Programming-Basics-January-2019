function groupStage(input)
{
    let team = input.shift();
    let matches = Number(input.shift());

    let points = 0;
    let goalDiff = 0;
    for(let i = 0; i < matches; i++){
        let scoreGoals = Number(input.shift());
        let receivedGoals = Number(input.shift());
        goalDiff += scoreGoals - receivedGoals;
        if(scoreGoals > receivedGoals){
            points += 3;
        }
        else if(scoreGoals == receivedGoals){
            points++;
        }
    }
    if(goalDiff >= 0){
        console.log(`${team} has finished the group phase with ${points} points.`);
        console.log(`Goal difference: ${goalDiff}.`);
    }
    else{
        console.log(`${team} has been eliminated from the group phase.`);
        console.log(`Goal difference: ${goalDiff}.`);
    }
}
groupStage(['Brazil', 3, 4, 2, 0, 0, 1, 1])