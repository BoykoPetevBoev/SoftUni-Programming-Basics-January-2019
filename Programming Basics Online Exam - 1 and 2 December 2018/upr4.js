function schoolTrip(input)
{
    let days = parseInt(input.shift());
    let food = parseInt(input.shift());
    let dog1 = Number(input.shift());
    let dog2 = Number(input.shift());
    let dog3 = Number(input.shift());

    let dog1Food = days * dog1;
    let dog2Food = days * dog2;
    let dog3Food = days * dog3;
    let totalFood = dog1Food + dog2Food + dog3Food;

    if(totalFood <= food)
    {
        let leftFood = Math.floor(food - totalFood) ;
        console.log(`${leftFood} kilos of food left.`);
    }
    else
    {
        let neededFood = Math.ceil(totalFood - food);
        console.log(`${neededFood} more kilos of food are needed.`)
    }
}
schoolTrip([2, 10, 1, 1, 2]);
schoolTrip([5, 10, 2.1, 0.8, 11]);
schoolTrip([1, 5, 3, 1, 1]);