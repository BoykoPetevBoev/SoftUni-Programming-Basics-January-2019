function stadiumIncome(input)
{
    let sectors = Number(input.shift());
    let capacity = Number(input.shift());
    let tiketPrice = Number(input.shift());

    let moneyIncome = capacity * tiketPrice;
    let sectorIncome = moneyIncome / sectors;
    let moneyForCharity = (moneyIncome - (sectorIncome * 0.75)) / 8;

    console.log(`Total income - ${moneyIncome.toFixed(2)} BGN`);
    console.log(`Money for charity - ${moneyForCharity.toFixed(2)} BGN`);
}
stadiumIncome([4, 5000, 5])