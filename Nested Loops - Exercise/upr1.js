function matrix(input)
{
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());
    
    for(let i = a; i <= b; i++ ){
        for(let j = a; j <= b; j++){
            for(let k = c; k <= d; k++){
                for(let l = c; l <= d; l++){
                    if(i != j && k != l && (i + l) == (k + j)){
                        console.log(i + '' + j);
                        console.log(k + '' + l);
                        console.log('');
                    }
                }
            }
        }
    }
}
matrix([2, 4, 4, 5])
