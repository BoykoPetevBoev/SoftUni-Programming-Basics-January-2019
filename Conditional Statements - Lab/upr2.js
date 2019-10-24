function greaterNumber(input)
{
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    if(num1 > num2){
        console.log(num1);
    }else if(num2 > num1){
        console.log(num2);
    }else{
        console.log(num1);
    }
}
greaterNumber([5, 10])