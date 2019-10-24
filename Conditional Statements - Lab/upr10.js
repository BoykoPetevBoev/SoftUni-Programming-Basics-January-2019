function dayOfWeek(input)
{
    let num = Number(input.shift());
    if(num == 1){
        console.log('Monday');
    }
    else if(num == 2){
        console.log('Tuesday');
    }
    else if(num == 3){
        console.log('Wednesday');
    }
    else if(num == 4){
        console.log('Thursday');
    }
    else if(num == 5){
        console.log('Friday');
    }
    else if(num == 6){
        console.log('Saturday');
    }
    else if(num == 7){
        console.log('Sunday');
    }
    else{
        console.log('Error')
    }
}
dayOfWeek([1])
dayOfWeek([2])
dayOfWeek([3])
dayOfWeek([4])
dayOfWeek([5])
dayOfWeek([6])
dayOfWeek([7])
dayOfWeek([8])