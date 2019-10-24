function sumSeconds(input)
{
    let Ivan = Number(input.shift());
    let Georgi = Number(input.shift());
    let Pesho = Number(input.shift());

    let sumSec = Ivan + Georgi + Pesho;
    let min = Math.floor(sumSec / 60);
    let sec = sumSec % 60;

    if(sec < 10){
        console.log(`${min}:0${sec}`);
    }
    else{
        console.log(min + ':' + sec);
    }
}
sumSeconds([50, 50 , 49])