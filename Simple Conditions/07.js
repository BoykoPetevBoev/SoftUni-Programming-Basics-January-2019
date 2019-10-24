function sumSeconds(input)
{
    let first = Number(input.shift());
    let second = Number(input.shift());
    let third = Number(input.shift());

    let time = first + second + third;
    let min = Math.floor(time / 60);
    let sec = time % 60;
    if(sec <= 9 )
    {
        sec = '0' + sec;
    }

    console.log(min + ':' + sec);
}
sumSeconds([35, 45, 44])
sumSeconds([22, 7, 34])
sumSeconds([50, 50, 49])
sumSeconds([14, 12, 10])