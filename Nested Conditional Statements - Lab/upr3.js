function pointInRectangle(input)
{
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());

    if((x1 <= x && x <= x2)&&(y1 <= y && y <=y2)){
        console.log('Inside');
    }
    else{
        console.log('Outside');
    }
    
}