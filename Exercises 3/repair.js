function repair([N, W, L, M, O])
{ 
    let area = parseInt(N * N);
    let bench = parseFloat(M * O);
    let oneTile = (W * L);
    let areaToCover = area - bench;
    let numTile = areaToCover / oneTile;
    let time = numTile * 0.2;
    console.log(numTile);
    console.log(time);
 

}
repair([20, 5, 4, 1, 2]);
repair([40, 0.8, 0.6, 3, 5]);