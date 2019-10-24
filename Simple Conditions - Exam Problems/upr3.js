function sleepyTomCat([input])
{
    let freedays = parseInt(input);
    let tomNorm = 30000;
    let workdays = 365 - freedays;
    let timeForPlay = freedays * 127 + workdays * 63;
    let diference = Math.abs(tomNorm - timeForPlay);

    let minutes = diference % 60;
    let hours = Math.floor(diference / 60);
    if(timeForPlay > tomNorm){
        console.log('Tom will run away');
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }
    else{
        console.log('Tom sleeps well');
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }

}
sleepyTomCat([20]);
sleepyTomCat([113]);