function travelling(input)
{
    let destination = input.shift();
    let neededMoney = Number(input.shift());

    while(destination != 'End'){
        while(neededMoney > 0){
            let savedMoney = Number(input.shift());
            neededMoney -= savedMoney;
        }
        console.log(`Going to ${destination}!`);
        destination = input.shift();
        neededMoney = Number(input.shift());
    }
}
travelling(['France', 2000, 300, 300, 200, 400, 190, 258, 360, 'Portugal', 
1450, 400, 400, 200, 300, 300, 'Egypt', 1900, 1000, 280, 300, 500, 'End'])