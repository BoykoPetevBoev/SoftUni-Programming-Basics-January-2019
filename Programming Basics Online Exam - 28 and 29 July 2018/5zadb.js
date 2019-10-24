function gameInfo(input)
{
    let team = input.shift();
    let matches = Number(input.shift());

    let totalTime = 0;
    let averageTime = 0;
    let gamesPenalties = 0;
    let gamesAditional = 0;
    for(let i = 0; i < matches; i++){
        let gameTime = Number(input.shift());
        totalTime += gameTime;
        if(gameTime > 120){
                gamesPenalties++;
            }
        else if(gameTime > 90){
            gamesAditional++;   
        }  
    }
    averageTime = (totalTime / matches).toFixed(2);
    console.log(`${team} has played ${totalTime} minutes. Average minutes per game: ${averageTime}`);
    console.log(`Games with penalties: ${gamesPenalties}`);
    console.log(`Games with additional time: ${gamesAditional}`);
}
gameInfo(['Bulgaria', 3, 95, 115, 123])