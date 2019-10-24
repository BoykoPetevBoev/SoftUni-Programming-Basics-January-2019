function everest(input) {
    let climbing = input.shift();
    let meters = Number(input.shift());

    let day = 1;
    let height = 5364;
    let success = false;
    while (climbing != 'END') {
        if (climbing == 'Yes') {
            day++;
        }
        if(day > 5){
            break;
        }
        height += meters;
        if(height >= 8848){
            success = true;
            break;
        }
        

        climbing = input.shift();
        meters = Number(input.shift());
    }
    if(success){
        console.log(`Goal reached for ${day} days!`);
    }
    else{
        console.log(`Failed!`);
        console.log(height);
    }
}
everest(['Yes', 1254, 'Yes', 1402, 'No', 250, 'Yes', 635, 'END'])