function equalPairs(input)
{
    let n = Number(input.shift());
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());

    let maxDiff = Number.MIN_SAFE_INTEGER;
    let firstSum = firstNum + secondNum;
    for(let i = 1; i < n; i++){
        let num1 = Number(input.shift());
        let num2 = Number(input.shift());
        let sum = num1 + num2;
        let diff = Math.abs(sum - firstSum);
        if(diff != 0){
            if(maxDiff < diff){
                maxDiff = diff;
            }
        }
        firstSum = sum;
    }
    if(maxDiff == Number.MIN_SAFE_INTEGER){
        console.log(`Yes, value=${firstSum}`);
    }
    else{
        console.log(`No, maxdiff=${maxDiff}`);
    }
}
equalPairs([4, 1, 1 ,3, 1, 2, 2, 0, 0])