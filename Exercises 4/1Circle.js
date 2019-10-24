function Circle([r])
{
    const p = 3.14;
    let S = p * r * r;
    let P = (2 * p * r).toFixed(2);
    console.log(`S= ${S}`);
    console.log('P=' + P);
}
Circle([10])