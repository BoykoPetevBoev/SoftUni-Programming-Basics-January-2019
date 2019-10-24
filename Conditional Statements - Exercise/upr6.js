function threeBrothers(input)
{
    let A = Number(input.shift());
    let B = Number(input.shift());
    let C = Number(input.shift());
    let D = Number(input.shift());
    
    let brothertime = ((1 /(1/A + 1/B + 1/C)) * 1.15);
    
    console.log(`Cleaning time: ${brothertime.toFixed(2)}`);
    
    if(brothertime <= D){
        let difference = Math.floor(Math.abs(brothertime - D));
        console.log(`Yes, there is a surprise - time left -> ${difference} hours.`)
    }
    else{
        let difference = Math.ceil(Math.abs(brothertime - D));
        console.log(`No, there isn't a surprise - shortage of time -> ${difference} hours. `)
    }
}
threeBrothers([3, 4, 5, 3.6]);
threeBrothers([3.2, 2.5, 1.24, 0.5]);