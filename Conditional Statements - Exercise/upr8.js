function wordSwimmingRecord(input)
{
    let record = Number(input.shift());
    let distance = Number(input.shift());
    let secPerMeter = Number(input.shift());
    
    let timePerSec = distance * secPerMeter;
    let delay = parseInt(distance / 15) * 12.5;
    let time = (timePerSec + delay);

    if(time < record){
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    }
    else{
        console.log(`No, he failed! He was ${(time - record).toFixed(2)} seconds slower.`)
    }
}
//wordSwimmingRecord([10464, 1500, 20]);
wordSwimmingRecord([55555.67, 3017, 5.03]);