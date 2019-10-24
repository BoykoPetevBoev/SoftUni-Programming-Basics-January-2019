function hello(input)
{
    let name = input.shift();
    let name2 = input.shift();
    console.log(`Hello, ${name}!`);
    console.log(`Hello, ${name2}!`);

}
hello(['Boyko', 'Ivan'])