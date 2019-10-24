function lettersCombinations(input)
{
    let from = input.shift().charCodeAt(0);
    let to = input.shift().charCodeAt(0);
    let skip = input.shift().charCodeAt(0);

    let num = 0;
    let result = '';
    for(let i = from; i <= to; i++){
        for(let j = from; j <= to; j++){
            for(let l = from; l <= to; l++){
                if(i != skip && j != skip && l != skip){
                    num++;
                    result += String.fromCharCode(i, j, l) + ' ' ;
                }

            }
        }
    }
    result += num;
    console.log(result);
}
lettersCombinations(['a', 'c', 'b' ])