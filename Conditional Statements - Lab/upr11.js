function animalType(input)
{
    let animal = input.shift();
    if(animal == 'dog'){
        console.log('mammal');
    }
    else if(animal == 'snake'|| animal == 'tortoise'|| animal == 'crocodile'){
        console.log('reptile');
    }
    else{
        console.log('unknown');
    }
}
animalType(['dog'])
animalType(['snake'])
animalType(['cat'])
animalType(['crocodile'])