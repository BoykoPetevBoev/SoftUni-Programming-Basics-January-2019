function substitute(input)
{
    let K = Number(input.shift());
    let L = Number(input.shift());
    let M = Number(input.shift());
    let N = Number(input.shift());

    let substitute = 0;
    for(let i = K; i <= 8; i++){
        for(let j = 9; j >= L; j--){
            for(let m = M; m <= 8; m++){
                for(let n = 9; n >= N; n--){
                    if(i % 2 == 0 && j % 2 != 0 && m % 2 == 0 && n % 2 != 0 && substitute < 6){
                        if(i == m && j == n){
                            console.log('Cannot change the same player.');
                        }
                        else{
                            console.log(`${i}${j} - ${m}${n}`);
                            substitute++; 
                        }
                    }
                }
            }
        }
    }
}
substitute([7, 6, 8, 5])