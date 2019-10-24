function divide(input)
{
    let n = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    for(let i = 0; i < n; i++){
        let num = Number(input.shift());
        if(num % 2 == 0){
            p1++;
        }
        if(num % 3 == 0){
            p2++;
        }
        if(num % 4 == 0){
            p3++;
        }
    }
    p1 = (p1 / n * 100).toFixed(2);
    p2 = (p2 / n * 100).toFixed(2);
    p3 = (p3 / n * 100).toFixed(2);
    console.log(p1 + '%');
    console.log(p2 + '%');
    console.log(p3 + '%');
}
divide([3, 3, 6, 9])