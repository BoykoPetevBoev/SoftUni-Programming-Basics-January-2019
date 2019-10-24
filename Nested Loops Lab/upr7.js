function nameWars(input)
{
    let name = input.shift();
    
    let max = Number.MIN_SAFE_INTEGER;
    let winner = '';
    let points = 0;

    while(name != 'STOP'){
        let sum = 0;
        for(let i = 0; i < name.length; i++){
            sum += name.charCodeAt(i); 
        }
        if(max < sum){
            winner = name;
            points = sum; 
        }
        name = input.shift();
    }
    console.log(`Winner is ${winner} - ${points}!`);
}
nameWars(['Ivo', 'Niki', 'Valio', 'Konstantin', 'STOP'])