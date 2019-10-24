function puppyCare(input)
{
    let food = Number(input.shift());
    food *= 1000;
    let eatedFood = Number(input.shift());
    while(eatedFood != 'Adopted'){
        eatedFood = Number(eatedFood); 
        food -= eatedFood;
        eatedFood = input.shift();  
    }
    if(food >= 0){
        console.log(`Food is enough! Leftovers: ${food} grams.`);
    }
    else{
        console.log(`Food is not enough. You need ${Math.abs(food)} grams more.`);
    }
}
puppyCare([2, 999, 456, 999, 999, 123, 456 , 'Adopted'])