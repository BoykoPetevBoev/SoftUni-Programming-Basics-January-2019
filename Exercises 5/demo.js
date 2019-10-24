function num(arg){
    let name = arg.shift();
    let age = Number(arg.shift());
    let after10age = age + 10;
    console.log(after10age);
    
}
num(['Boyko', '23']);