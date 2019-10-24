function charityCampaign(input)
{
    let days = parseInt(input.shift());
    let cooks = parseInt(input.shift());
    let cackes = parseInt(input.shift());
    let waffles = parseInt(input.shift());
    let pancakes = parseInt(input.shift());

    let cackesPrice = cackes * 45;
    let wafflesPrice = waffles * 5.80;
    let pancakesPrice = pancakes * 3.20;
    let dailyАmount = (cackesPrice + wafflesPrice + pancakesPrice) * cooks;
    let total = dailyАmount * days;
    let forCharity = total - (total * 1 / 8);

    console.log(forCharity.toFixed(2));

}
charityCampaign([20, 8, 14, 30, 16]);
charityCampaign([131, 5, 9, 33, 46]);