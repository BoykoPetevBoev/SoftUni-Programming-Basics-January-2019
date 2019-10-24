function equalWords(input)
{
    let arg1 = (input.shift()).toLowerCase();
    let arg2 = (input.shift()).toLowerCase();
    if(arg1 == arg2){
        console.log('yes');
    }
    else{
        console.log('no')
    }
    
}
equalWords(['BoYkO', 'boyko']);
equalWords(['boev', 'dskjd'])