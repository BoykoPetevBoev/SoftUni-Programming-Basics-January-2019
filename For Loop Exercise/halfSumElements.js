function halfSumElements(input) {
    let n = Number(input.shift());
    let sumNum = 0;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (max < num) {
            max = num;
        }
        sumNum += num;
    }
    sumNum -= max;
    if (sumNum == max) {
        console.log(`Yes`);
        console.log(`Sum = ${max}`);
    }
    else{
        console.log(`No`);
        console.log(`Diff = ${Math.abs(sumNum - max)}`);
    }
}
halfSumElements([7, 3, 4, 
    0, 1, 2, 12, 1]);