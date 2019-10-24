function trekkingMania(input)
{
    let groups = Number(input.shift());

    let allPeople = 0;
    let Musala = 0;
    let Monblan = 0;
    let Kilimanjaro = 0;
    let K2 = 0;
    let Everest = 0;
    for(i = 1; i <= groups ; i++){
        let people = Number(input.shift());
        allPeople += people;
        if(people <= 5){
            Musala += people;
        }
        else if(people <= 12){
            Monblan += people;
        }
        else if(people <= 25){
            Kilimanjaro += people;
        }
        else if(people <= 40){
            K2 += people;
        }
        else if(people > 40){
            Everest += people;
        }
    }
    console.log(((Musala / allPeople) * 100).toFixed(2) + '%');
    console.log(((Monblan / allPeople) * 100).toFixed(2) + '%');
    console.log(((Kilimanjaro / allPeople) * 100).toFixed(2) + '%');
    console.log(((K2 / allPeople) * 100).toFixed(2) + '%');
    console.log(((Everest / allPeople) * 100).toFixed(2) + '%');
}
trekkingMania([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78])