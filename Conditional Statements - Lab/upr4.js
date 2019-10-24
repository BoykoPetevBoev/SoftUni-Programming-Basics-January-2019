function numberToText(input)
{
    let num = Number(input.shift());
    if(num == 1){
        console.log('one')
    }else if(num == 2){
        console.log('two')
    }else if(num == 3){
        console.log('three');
    }else if(num == 4){
        console.log('four');
    }else if(num == 5){
        console.log('five');
    }else if(num == 6){
        console.log('six');
    }else if(num == 7){
        console.log('seven');
    }else if(num == 8){
        console.log('eight');
    }else if(num == 9){
        console.log('nine');
    }else{
        console.log('number too big')
    }
    
}
numberToText([1])
numberToText([2])
numberToText([3])
numberToText([4])
numberToText([5])
numberToText([6])
numberToText([7])
numberToText([8])
numberToText([9])
numberToText([10])
