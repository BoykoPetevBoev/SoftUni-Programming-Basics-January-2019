function PersonalTitles(input)
{
    let age = Number(input.shift());
    let sex = input.shift();

    let result;
    if(sex == 'm' && age < 16){
        result = 'Master';
    }
    else if(sex == 'm' && age >= 16){
        result = 'Mr.';
    }
    else if(sex == 'f' && age < 16){
        result = 'Miss';
    }
    else if(sex == 'f' && age >= 16){
        result = 'Ms.';
    }

    console.log(result);
}