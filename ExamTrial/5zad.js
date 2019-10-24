function bus(input)
{
    let peopleInBuls = Number(input.shift());
    let busstop = Number(input.shift());

    let peoplePlus = 0;
    let peopleMinus = 0;
    for(let i = 1; i <= busstop; i++){
        peopleMinus = Number(input.shift());
        peopleInBuls -= peopleMinus;
        peoplePlus = Number(input.shift());
        peopleInBuls += peoplePlus;
        if(i % 2 != 0){
            peopleInBuls += 2;
        }
        else{
            peopleInBuls -= 2;
        }
    }
    console.log(`The final number of passengers is : ${peopleInBuls}`);
}
bus([25, 5, 14, 15, 9, 11, 10, 13, 6, 7, 10, 8])