function birthday(input)
{
    let l = Number(input.shift());
    let w = Number(input.shift());
    let h = Number(input.shift());
    let percent = Number(input.shift());

    let aquarium = l * w * h;
    let fullLeters = aquarium * 0.001;
    let decorativeАrea = percent / 100;
    let liters = fullLeters * (1 - decorativeАrea);

    console.log(liters.toFixed(3));
}
birthday([85, 75, 47, 17]);
birthday([105, 77, 89, 18.5]);
