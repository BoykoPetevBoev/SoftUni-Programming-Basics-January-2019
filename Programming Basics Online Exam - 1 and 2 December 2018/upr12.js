function safePasswordGenerator(input)
{
    let a = Number(input.shift());
    let b = Number(input.shift());
    let pass = Number(input.shift());
    let A = 35;
    let B = 64;
    
    let print = '';
    let i = 0;
        for(let x = 1; x <= a; x++){
            if(i == pass){
                break;
            }
            for(let y = 1; y <= b; y++){
                i++;
                print += String.fromCharCode(A) + String.fromCharCode(B) + x + y + String.fromCharCode(B) + String.fromCharCode(A) + '|';
                A++;
                B++;
                if(A > 55){
                    A = 35;
                }
                if(B > 96){
                    B = 64;
                }
                if(i == pass){
                    break;
                }
            }
        }
    
    console.log(print);
}
safePasswordGenerator([20, 50, 10])