function mountainRun(input)
{
    let record = Number(input.shift());
    let distance = Number(input.shift());
    let meterForSeconds = Number(input.shift());

    let tempo = distance * meterForSeconds;
    let delay = Math.floor(distance / 50) * 30;
    let time = tempo + delay;

    if(time < record)
    {
        console.log(`Yes! The new record is ${time.toFixed(2)} seconds.`)
    }
    else
    {
        console.log(`No! He was ${(time - record).toFixed(2)} seconds slower.`)
    }

}
mountainRun([10164, 1400, 25]);
mountainRun([5554.36, 1340, 3.23]);
mountainRun([1377, 389, 3])