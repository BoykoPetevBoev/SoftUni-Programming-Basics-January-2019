function seaTrip(input)
{
    let foodMoney = Number(input.shift());
    let souvenirsMoney = Number(input.shift());
    let hotelMoney = Number(input.shift());

    let roadMoney = (420 / 100 * 7) * 1.85;
    let costs = 3 * (foodMoney + souvenirsMoney);
    let hotel = (hotelMoney * 0.9) + (hotelMoney * 0.85) + (hotelMoney * 0.8);

    let result = roadMoney + costs + hotel;
    console.log(`Money needed: ${result.toFixed(2)}`);
}
seaTrip([100, 50, 500])