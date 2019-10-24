function numberToText(input)
{
    let num = Number(input);
    let units = num % 10;
    let tens = num / 10;
    if(units == 1){
        units = 'one';
    }
    else if(units == 2){
        units = 'two';
    }
    else if(units == 3){
        units = 'three';
    }
    else if(units == 4){
        units = 'four';
    }
    else if(units == 5){
        units = 'five';
    }
    else if(units == 6){
        units = 'six';
    }
    else if(units == 7){
        units = 'seven';
    }
    else if(units == 8){
        units = 'eight';
    }
    else if(units == 9){
        units = 'nine';
    }
    if(tens = 0){
       tens = " ";
    }
    else if(tens == 1){
        tens = 'one'
    }
    else if(tens == 2){
        tens = 'two';
    }
    else if(tens == 3){
        tens = 'three';
    }
    else if(tens == 4){
        tens = 'four';
    }
    else if(tens == 5){
        tens = 'five';
    }
    else if(tens == 6){
        tens = 'six';
    }
    else if(tens == 7){
        tens = 'seven';
    }
    else if(tens == 8){
        tens = 'eight';
    }
    else if(tens == 9){
        tens = 'nine';
    }
    console.log(tens + ' ' + units)
}
numberToText(25);
numberToText(42);
numberToText(6);
numberToText(10);
