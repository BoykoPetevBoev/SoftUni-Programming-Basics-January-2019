function danceHall(input)
{
    let L = Number(input.shift());
    let W = Number(input.shift());
    let A = Number(input.shift());

    let hallArea = (L * 100) * (W * 100);
    let wardrobe = (A  * 100) * (A * 100);
    let bench =  hallArea / 10;
    let freeArea = hallArea - wardrobe - bench;
    let dancers = Math.floor(freeArea / (40 + 7000));

    console.log(dancers);

}
danceHall([50, 25, 2]);