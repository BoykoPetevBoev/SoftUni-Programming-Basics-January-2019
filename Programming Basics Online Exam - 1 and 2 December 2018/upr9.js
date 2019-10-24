function projectPrice(input)
{
    let stages = Number(input.shift());
    let moneyForPoint = Number(input.shift());

    let totalPoints = 0;
    let totalSum = 0;
    for(let i = 1; i <= stages; i++){
        let points = Number(input.shift());
        if(i % 2 == 0){
            points *= 2;
        }
        totalPoints += points;
    }
    totalSum = (totalPoints * moneyForPoint).toFixed(2);
    console.log(`The project prize was ${totalSum} lv.`);
}
projectPrice([7, 100.5, 2, 4, 5, 1, 1, 7,3 ])
