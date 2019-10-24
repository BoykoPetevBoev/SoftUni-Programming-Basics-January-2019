function salary(input)
{
    let openTabs = Number(input.shift());
    let salary = Number(input.shift());

    for(let i = 0; i < openTabs; i++){
        let tabName = input.shift();
        if(tabName == 'Facebook'){
            salary -= 150;
        }else if(tabName == 'Instagram'){
            salary -= 100;
        }else if(tabName == 'Reddit'){
            salary -= 50;
        }
    }
    if(salary > 0){
        console.log(salary);
    }
    else{
        console.log('You have lost your salary.');
    }
}
salary([3, 500, 'Facebook', 'Reddit', 'Instagaram'])