function multiplyTable(input)
{
    let num = input.toString();
    let firstNum = num.charAt(0);
    let secondNum = num.charAt(1);
    let thirdNum = num.charAt(2);
    
    for(let i = 1; i <= thirdNum; i++){
        for(let j = 1; j <= secondNum; j++){
            for(let l = 1; l <= firstNum; l++){
                let result = 0;
                result = i * j * l;
                console.log(`${i} * ${j} * ${l} = ${result};`);
            }
        }
    }
}
multiplyTable([324])