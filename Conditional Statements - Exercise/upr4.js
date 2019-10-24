function metricConverter(input)
{
    let num = Number(input.shift());
    let first = input.shift();
    let second = input.shift();
    let result = 0;
    if(first == 'mm'){
        result = num / 1000;
    }
    else if(first == 'cm'){
        result = (num / 100);
    }
    else if(first == 'm'){
        result = num;
    }

    if(second == 'cm'){
        result *= 100; 
    }
    else if(second == 'mm'){
        result *= 1000;
    }
    console.log(result.toFixed(3))
}
metricConverter([12, 'mm', 'm']);
metricConverter([150, 'm', 'cm']);
metricConverter([45, 'cm', 'mm']);
metricConverter([1201, 'mm', 'cm']);