function toyShop(input)
{
    let tripPrice = Number(input.shift());
    let numP = parseInt(input.shift());
    let numK = parseInt(input.shift());
    let numM = parseInt(input.shift());
    let numMi = parseInt(input.shift());
    let numTruck = parseInt(input.shift());

    let numToys = numP + numK + numM + numMi + numTruck;
    let toysPrice = numP * 2.60 + numK * 3 + numM * 4.10 + numMi * 8.20 + numTruck * 2;

    if(numToys >= 50){
        toysPrice *= 0.75; 
    }
    let Total = toysPrice * 0.9;
    let money = (Math.abs(Total - tripPrice)).toFixed(2);

    if(Total >= tripPrice){
        console.log(`Yes! ${money} lv left.`);
    }
    else{
        console.log(`Not enough money! ${money} lv needed.`);
    }
}
toyShop([40.8, 20, 25, 30, 50, 10])
toyShop([320, 8, 2, 5, 5, 1])