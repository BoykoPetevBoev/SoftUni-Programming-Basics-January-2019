function metricConverter([arg1, arg2, arg3])
{
    let num = Number(arg1);
    let input = arg2.toLowerCase();
    let output = arg3.toLowerCase();
    if(input == 'mm')
    {
        num = num / 1000;
    }
    else if(input == 'sm')
    {
        num = num / 100;
    }
    else if(input == 'mi')
    {
        num = num / 0.000621371192;
    }
    else if(input == 'in')
    {
        num = num / 39.3700787;
    }
    else if(input == 'km')
    {
        num = num / 0.001;
    }
   else if(input == 'ft')
    {
        num = num / 3.2808399;
    }
    else if(input == 'yd')
    {
        num = num / 1.0936133;
    }
    else if(input == 'm')
    {
        num;
    }
    if(output == 'mm')
    {
        num = num * 1000;
    }
    else if(output == 'sm')
    {
        num = num * 100;
    }
    else if(output == 'mi')
    {
        num = num * 0.000621371192;
    }
    else if(output == 'in')
    {
        num = num * 39.3700787;
    }
    else if(output == 'km')
    {
        num = num * 0.001;
    }
   else if(output == 'ft')
    {
        num = num * 3.2808399;
    }
    else if(output == 'yd')
    {
        num = num * 1.0936133;
    }
    else if(output == 'm')
    {
        num;
    }
    console.log(num + ' ' + output)
}
//metricConverter([12, 'km', 'ft']);
//metricConverter([150, 'mi', 'in']);
//metricConverter([450, 'yd', 'km']);
metricConverter([1755.50, 'sm', 'yd'])