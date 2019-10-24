function divisionWithoutRemainder(input)
{
    let numbers = Number(input.shift());

    let p2num = 0;
    let p3num = 0;
    let p4num = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;

    for(let i = 0; i < numbers; i++){
        let num = Number(input.shift());

        if(num % 2 == 0){
            p2num++;
        }
        if(num % 3 == 0){
            p3num++;
        }
        if(num % 4 == 0){
            p4num++;
        }
    }
    p2 = p2num / numbers * 100;
    p3 = p3num / numbers * 100;
    p4 = p4num / numbers * 100;

    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
} 
divisionWithoutRemainder([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])