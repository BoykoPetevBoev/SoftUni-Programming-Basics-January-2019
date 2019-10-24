function time(input)
{
    let hour = parseInt(input.shift());
    let min = parseInt(input.shift());

    
    let minPlus = min + 15;
    if(minPlus > 59){
        hour++;
        minPlus = minPlus % 60;
    }
    if(minPlus < 10){
        minPlus = '0' + minPlus;
    }
    if(hour > 23){
        hour = hour % 24;
    }
    console.log(`${hour}:${minPlus}`)
}
time([1, 46]);
time([0, 01]);
time([23, 59]);
time([11, 08]);
time([12, 49]);