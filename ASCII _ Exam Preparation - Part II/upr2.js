function changeTiles(input)
{
    let moneySaved = Number(input.shift());
    let floorWidth = Number(input.shift());
    let floorLength = Number(input.shift());
    let triangleSide = Number(input.shift());
    let triangleHight = Number(input.shift());
    let tilePrice = Number(input.shift());
    let masterMoney = Number(input.shift());
    
    let floorArea = floorLength * floorWidth;
    let tile = triangleHight * triangleSide / 2;
    let numTiles = Math.ceil(floorArea / tile) + 5;
    let totalPrice = (numTiles * tilePrice) + masterMoney;

    if(moneySaved >= totalPrice){
        console.log(`${(moneySaved - totalPrice).toFixed(2)} lv left.`);
    }
    else{
        console.log(`You'll need ${(totalPrice - moneySaved).toFixed(2)} lv more.`);
    }
}
changeTiles([500, 3, 2.5, 0.5, 0.7, 7.8, 100])