function ticketCombination(input)
{
    let ticketNum = Number(input.shift());

    let price = 0;
    let generationNum = 0;
    let result = '';
    for(let i = 'B'.charCodeAt(); i <= 'L'.charCodeAt(); i++){
        for(let j = 'f'.charCodeAt(); j >= 'a'.charCodeAt(); j--){
            for(let l = 'A'.charCodeAt(); l <= 'C'.charCodeAt(); l++){
                for(let n = 1; n <= 10; n++){
                    for(let m = 10; m >= 1; m--){
                        generationNum++;
                        if(generationNum == ticketNum){
                            price = i + j + l + n + m;
                            result = String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(l) + n + m;
                            console.log(`Ticket combination: ${result}`);
                            console.log(`Prize: ${price} lv.`);
                        }
                    }
                }
            }
        }
    }
}
ticketCombination([2568])