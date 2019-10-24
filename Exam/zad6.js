function basketballTournament(input)
{
    let tournament = input.shift();

    let ourTeamPoints = 0;
    let enemyTeamPoints = 0;
    let diff = 0;
    let win = 0;
    let loss = 0; 
    let totalGames = 0;
    while(tournament != 'End of tournaments'){
        let gameNum = 0;
        let numGames = Number(input.shift());
        totalGames += numGames;

        for(let i = 1; i <= numGames; i++){
            gameNum++;
            ourTeamPoints = Number(input.shift());
            enemyTeamPoints = Number(input.shift());
            diff = Math.abs(ourTeamPoints - enemyTeamPoints);
            if(ourTeamPoints > enemyTeamPoints){
                win++;
                console.log(`Game ${gameNum} of tournament ${tournament}: win with ${diff} points.`);
            }
            else if(ourTeamPoints < enemyTeamPoints){
                loss++;
                console.log(`Game ${gameNum} of tournament ${tournament}: lost with ${diff} points.`);
            }
        }
        tournament = input.shift();
    }
    win = (win / totalGames) * 100;
    loss = (loss / totalGames) * 100;
    console.log(`${win.toFixed(2)}% matches win`);
    console.log(`${loss.toFixed(2)}% matches lost`);
}
basketballTournament(['Dunkers', 2, 75, 65, 56, 73, 'Fire Girls', 3, 67, 34, 83, 98, 66, 45, 'End of tournaments'])