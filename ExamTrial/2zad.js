function spaceship(input)
{
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let astronautHeigth = Number(input.shift());

    let shipSpace = width * length * height;
    let roomSpace = (astronautHeigth + 0.40) * 2 * 2;
    let capacity = Math.floor(shipSpace / roomSpace);

    if(capacity < 3){
        console.log('The spacecraft is too small.');
    }
    else if(capacity > 10){
        console.log('The spacecraft is too big.');
    }
    else{
        console.log(`The spacecraft holds ${capacity} astronauts.`);
    }
}
spaceship([3.5, 4, 5, 1.7])