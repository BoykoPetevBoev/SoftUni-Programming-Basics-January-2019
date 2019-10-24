function trekkingEquipment(input)
{
    let mountaineers = parseInt(input.shift());
    let carabiners = parseInt(input.shift());
    let ropes = parseInt(input.shift());
    let pickeys = parseInt(input.shift());

    let carabinersPrice = carabiners * 36;
    let ropesPrice = ropes * 3.60;
    let pickeysPrice = pickeys * 19.80;
    let sumForOnePerson = carabinersPrice + ropesPrice + pickeysPrice;
    let sumForAll = sumForOnePerson * mountaineers;
    let total = sumForAll * 1.2;

    console.log(total.toFixed(2))

}
trekkingEquipment([20, 14, 30, 6]);
trekkingEquipment([131, 9, 33, 46]);