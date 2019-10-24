function convRadtoDeg([rad])
{
    let deg = Math.round(rad * 180 / Math.PI);
    console.log('Degree is ' + deg);
}
convRadtoDeg([3.1416]);
convRadtoDeg([6.2832]);
convRadtoDeg([0.7854]);
convRadtoDeg([0.5236]);