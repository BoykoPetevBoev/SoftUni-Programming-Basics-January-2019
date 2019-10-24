function mathPuzzle(input)
{
    let num = Number(input.shift());

    let print = false;
    for(let a = 1; a <= 30; a++){
        for(let b = 1; b <= 30; b++){
            for(let c = 1; c <= 30; c++){
                let result = 0;
                if(a < b && b < c){
                   result = a + b + c;
                   if(result == num){
                       print = true;
                       console.log(`${a} + ${b} + ${c} = ${result}`);
                   }
                }
                if(a > b && b > c){
                    result = a * b * c;
                    if(result == num){
                        print = true
                        console.log(`${a} * ${b} * ${c} = ${result}`);
                    }
                }
            }
        }
    }
    if(!print){
        console.log('No!');
    }
}
mathPuzzle([93])