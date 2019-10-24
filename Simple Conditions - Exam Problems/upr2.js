function pipesInPool(input)
{
    let V = parseInt(input.shift());
    let P1 = parseInt(input.shift());
    let P2 = parseInt(input.shift());
    let H = Number(input.shift());

    let firstPipe = P1 * H;
    let secondPipe = P2 * H;
    let water = firstPipe + secondPipe;

    if(water < V){
        let pool = Math.trunc((water / V) * 100);
        let pipe1 = Math.trunc((firstPipe / water) * 100);
        let pipe2 = Math.trunc((secondPipe / water) * 100);
        console.log(`The pool is ${pool}% full. Pipe 1: ${pipe1}%. Pipe2: ${pipe2}%.`);
    } 
    else{
        let time = (water - V) / (P1 + P2); 
        console.log(`For ${time} hours the pool overflows with ${water - V} liters.`);
    }
}
//pipesInPool([1000, 100, 120, 3])
pipesInPool([100,
    100,
    100,
    2.5])