function skeleton(input)
{
    let mins = Number(input.shift());
    let sec = Number(input.shift());
    let lenght = Number(input.shift());
    let secPer100m = Number(input.shift());

    let totalSec = (60 * mins) + sec;
    let delay = (lenght / 120) * 2.5;
    let MarinsTime = (lenght / 100) * secPer100m - delay;

    let diff = Math.abs(MarinsTime - totalSec);
    if(MarinsTime <= totalSec){
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${MarinsTime.toFixed(3)}.`);
    }
    else{
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }

} 
skeleton([1, 20, 1546, 12])