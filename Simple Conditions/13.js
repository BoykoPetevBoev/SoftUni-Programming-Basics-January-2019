function areaOfFigures(input)
{
     let type = input.shift();
     let num1 = Number(input.shift());
     let num2 = Number(input.shift());
     //let S = 0;

     if (type == 'square')
     {
         let a = num1;
         let S = a * a;
         console.log(S);
     }
     else if(type == 'rectangle')
     {
         let a = num1;
         let b = num2;
         let S = a * b;
         console.log(S);
     }
     else if(type == 'circle')
     {
         let r = num1;
         let S = Math.PI * r * r;
         console.log(S.toFixed(3));
     }
     else if(type == 'triangle')
     {
         let a = num1;
         let h = num2;
         let S = a * h / 2;
         console.log(S);
     }
}
areaOfFigures(['square', 5]);
areaOfFigures(['rectangle', 7, 2.5]);
areaOfFigures(['circle', 6]);
areaOfFigures(['triangle', 4.5, 20])