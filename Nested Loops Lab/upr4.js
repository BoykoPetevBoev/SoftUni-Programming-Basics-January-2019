function combination(input)
{
    let n = Number(input);
    let result = 0;

    for(let x1 = 0; x1 <= n; x1++){
        for(let x2 = 0; x2 <= n; x2++){
            for(let x3 = 0; x3 <= n; x3++){
                for(let x4 = 0; x4 <= n; x4++){
                    for(let x5 = 0; x5 <= n; x5++){
                        let sum = x1 + x2 + x3 + x4 + x5;
                        if(sum == n){
                            result++;
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
combination([25])