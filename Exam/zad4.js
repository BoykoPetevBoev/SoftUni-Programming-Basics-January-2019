function gameNumberWars(input) {
    let player1 = input.shift();
    let player2 = input.shift();

    let points1 = input.shift();
    let points2 = input.shift();

    let totalPoints1 = 0;
    let totalPoints2 = 0;

    let numWars = false;
    while (points1 != 'End of game' && !numWars) {
        points1 = Number(points1);
        points2 = Number(points2);
        if (points1 > points2) {
            totalPoints1 += (points1 - points2);
        }
        else if (points1 < points2) {
            totalPoints2 += (points2 - points1);
        }
        else {
            numWars = true;
            points1 = Number(input.shift());
            points2 = Number(input.shift());
            console.log('Number wars!');
            if (points1 > points2) {
                console.log(`${player1} is winner with ${totalPoints1} points`);
            }
            else if (points1 < points2) {
                console.log(`${player2} is winner with ${totalPoints2} points`);
            }
            continue;
        }
        points1 = input.shift();
        points2 = input.shift();
    }
    if(!numWars){
        console.log(`${player1} has ${totalPoints1} points`);
        console.log(`${player2} has ${totalPoints2} points`);
    }
}
gameNumberWars(['Elena', 'Simeon', 6, 3, 2, 5, 8, 9, 'End of game'])