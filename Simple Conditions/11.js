function equalWords(input)
{
    let firstWord = (input.shift()).toLowerCase();
    let secondWord = (input.shift()).toLowerCase();
    if(firstWord == secondWord)
    {
        console.log('yes')
    }
    else{
        console.log('no')
    }
}
equalWords(['hello', 'hello'])
equalWords(['Hello', 'hello'])
equalWords(['dfdf', 'hello'])