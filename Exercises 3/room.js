function room([l, w])
{
    if(w>=3, w<=l, l<=100)
    {
    let row = Math.floor(l / 1.2);
    let colum = Math.floor((w - 1) / 0.7);
    //console.log('Rows: ' + row);
    //console.log('Colums: ' + colum);
   
    let Num = Math.floor(row * colum - 3);
    console.log(`Number of workspace  is ${Num}`);
    }
    else
    {
        console.log('Enter a valid values!')

    }

}
room([15, 8.9])
room([8.4, 5.2])
room([2, 1])
room([112, 150])
