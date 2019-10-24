function programmer([workdays, dailyMoney, course])
{
    parseInt(workdays);
    parseFloat(dailyMoney);
    parseFloat(course);
    let month = workdays * dailyMoney;
    let year = (month * 12 + month * 2.5) * course;
    let tax = year * 0.25;
    let profitPerDay = (year - tax) / 365;
    console.log(profitPerDay.toFixed(2));
}
programmer([21, 75.00, 1.59]);
programmer([15, 105, 1.71]);
programmer([22, 199.99, 1.50]);
