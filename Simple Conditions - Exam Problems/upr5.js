function firm(input)
{
    let hours = parseInt(input.shift());
    let days = parseInt(input.shift());
    let workers = parseInt(input.shift());

    let daysForProject = (days * 0.9);
    let workHours= Math.floor(daysForProject * 10 * workers);

    let difference = Math.abs(hours - workHours);
    
    if(workHours > hours){
        console.log(`Yes!${difference} hours left.`);
    }
    else{
        console.log(`Not enough time!${difference} hours needed.`);
    }
}
firm([90, 7, 3]);
firm([99, 3, 1]);