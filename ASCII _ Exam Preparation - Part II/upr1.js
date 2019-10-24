function distance(input)
{
    let speed = Number(input.shift());
    let firstTime = Number(input.shift());
    let secondTime = Number(input.shift());
    let thirdTime = Number(input.shift());

    firstTime /= 60;
    secondTime /= 60;
    thirdTime /= 60;

    let result = 0;

    result += speed * firstTime;
    speed *= 1.10;
    result += speed * secondTime;
    speed *= 0.95;
    result += speed * thirdTime;

    console.log(result.toFixed(2));
}
distance([140, 112, 75, 190])