function areaOfFigures(input)
{
    let figure = (input.shift()).toLowerCase();
    let area = 0;
    if(figure == 'square'){
        let a = Number(input.shift());
        area = a * a;
    }
    else if(figure == 'rectangle'){
        let a = Number(input.shift());
        let b = Number(input.shift());
        area = a * b;
    }
    else if(figure == 'circle'){
        let r = Number(input.shift());
        area = Math.PI * r * r;
    }
    else if(figure == 'triangle'){
        let a = Number(input.shift());
        let h = Number(input.shift());
        area = a * h / 2;
    }
    console.log(area.toFixed(3));
}
areaOfFigures(['square', 5])
areaOfFigures(['rectangle', 7, 2.5])
areaOfFigures(['circle', 6])
areaOfFigures(['triangle', 4.5, 20])