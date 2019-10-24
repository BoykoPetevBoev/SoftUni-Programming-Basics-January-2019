function fitnessCenter(input)
{
    let peopleNum = Number(input.shift());

    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;

    let workout = 0;
    let protein = 0;

    for(let i = 1; i <= peopleNum; i++){
        let activity = input.shift();
        if(activity == 'Back'){
            back++;
            workout++;
        }
        else if(activity == 'Chest'){
            chest++;
            workout++;
        }
        else if(activity == 'Legs'){
            legs++;
            workout++
        }
        else if(activity == 'Abs'){
            abs++;
            workout++;
        }
        else if(activity == 'Protein shake'){
            proteinShake++;
            protein++;
        }
        else if(activity == 'Protein bar'){
            proteinBar++;
            protein++;
        }
    }
    let workoutPercentage = (workout / peopleNum) * 100;
    let proteinPercentage = (protein / peopleNum) * 100;
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${workoutPercentage.toFixed(2)}% - work out`);
    console.log(`${proteinPercentage.toFixed(2)}% - protein`);
}
fitnessCenter([10,
    'Back',
    'Chest',
    'Legs',
    'Abs',
    'Protein shake',
    'Protein bar',
    'Protein shake',
    'Protein bar',
    'Legs',
    'Abs'
    ])