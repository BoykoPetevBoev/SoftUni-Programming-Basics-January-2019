function demo(input)
{
    let firstName = input.shift();
    let lastName = input.shift();
    let age = Number(input.shift());
    let city = input.shift();
    console.log(`You are ${firstName} ${lastName} a ${age}-years old from ${city}.`);
}
demo(['Boyko', 'Boev', '23', 'Haskovo']);