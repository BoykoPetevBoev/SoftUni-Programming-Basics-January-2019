function tradeCommissions(input)
{
    let city = input.shift();
    let sales = Number(input.shift());

    let commission = 0;
    if(city == 'Sofia'){
        if(0 <= sales && sales <=500){
         commission = sales * 0.05;
        }
        else if(500 < sales && sales <= 1000){
            commission = sales * 0.07;
        }
        else if(1000 < sales && sales <= 10000){
            commission = sales * 0.08;
        }
        else if(sales > 10000){
            commission = sales * 0.12;
        }
        else{
            console.log('error');
        }
    }
    else if(city == 'Varna'){
        if(0 <= sales && sales <=500){
         commission = sales * 0.045;
        }
        else if(500 < sales && sales <= 1000){
            commission = sales * 0.075;
        }
        else if(1000 < sales && sales <= 10000){
            commission = sales * 0.1;
        }
        else if(sales > 10000){
            commission = sales * 0.13;
        }
        else{
            console.log('error');
        }
    }
    else if(city == 'Plovdiv'){
        if(0 <= sales && sales <=500){
         commission = sales * 0.055;
        }
        else if(500 < sales && sales <= 1000){
            commission = sales * 0.08;
        }
        else if(1000 < sales && sales <= 10000){
            commission = sales * 0.12;
        }
        else if(sales > 10000){
            commission = sales * 0.145;
        }
        else{
            console.log('error');
        }
    }
    else{
        console.log('error')
    }
    if(commission > 0){
        console.log(commission.toFixed(2));
    }
}
tradeCommissions(['Varna', 500])