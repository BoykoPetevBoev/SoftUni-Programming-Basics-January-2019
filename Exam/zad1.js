function basketballEquipment(input)
{
    let yearTaxes = Number(input.shift());

    let sneakers =  yearTaxes * 0.6;
    let outfit = sneakers * 0.8;
    let basketball = outfit / 4;
    let basketballAccesoares = basketball / 5;

    let result = yearTaxes + sneakers + outfit + basketball + basketballAccesoares;
    console.log(result.toFixed(2));
} 
basketballEquipment([320])