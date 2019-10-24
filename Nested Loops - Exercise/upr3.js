function coding(input)
{
    let num = Number(input);

    for(let i = num.length - 1; i >= 1; i--){
        let value = num[i] + 33;
        let sym = String.fromCharCode(value);
        let result = '';
        for(let j = 1; j <= num[i]; j++){
             result += value; 
        }
        console.log(result);
    }
}
coding([123])