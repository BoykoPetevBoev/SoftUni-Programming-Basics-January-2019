function scholarship(input)
{
    let money = Number(input.shift());
    let success = Number(input.shift());
    let minSalary = Number(input.shift());

    let socialPay = minSalary * 0.35;
    let excellentPay = success * 25;

    if(money >= minSalary || success <= 4.50){
        console.log('You cannot get a scholarship!');
    }
    else if(success >= 5.5 && excellentPay >= socialPay){
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentPay)} BGN`);
    }
    else if(success > 4.5){
        console.log(`You get a Social scholarship ${Math.floor(socialPay)} BGN`);
    }
}
//scholarship([480, 4.60, 450]);
scholarship([300, 5.65, 420]);