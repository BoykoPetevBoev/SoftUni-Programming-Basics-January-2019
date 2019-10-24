function bestPlayer(input)
{
    let name = input.shift();
    let goals = Number(input.shift());

    let bestPlayer = '';
    let mostGoals = 0;
    while(name != 'END'){
        if(mostGoals < goals){
            bestPlayer = name;
            mostGoals = goals;
            if(mostGoals >= 10){
                break;
            }
        }
        name = input.shift();
        goals = Number(input.shift());
    }
    console.log(`${bestPlayer} is the best player!`);
    if(mostGoals >= 3){
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    }
    else{
        console.log(`He has scored ${mostGoals} goals.`);
    }
}
bestPlayer(['a1', 10, 'b1', 50, 'END'])