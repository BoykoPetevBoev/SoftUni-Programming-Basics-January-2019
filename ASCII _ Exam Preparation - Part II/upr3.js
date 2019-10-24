function flowers(input)
    {
        let Chrysanthemum = Number(input.shift());
        let Roses = Number(input.shift());
        let Tulips = Number(input.shift());
        let season = input.shift();
        let feastDay = input.shift();

        let totalFlowers = Chrysanthemum + Roses + Tulips;
        let priceChrysanthemum = 0;
        let priceRoses = 0;
        let priceTulips = 0;
        if(season == 'Spring' || season == 'Summer'){
            priceChrysanthemum = Chrysanthemum * 2.00;
            priceRoses = Roses * 4.10;
            priceTulips = Tulips * 2.50;
        }
        else if(season == 'Autumn' || season == 'Winter'){
            priceChrysanthemum = Chrysanthemum * 3.75;
            priceRoses = Roses * 4.50;
            priceTulips = Tulips * 4.15;
        }
        let totalPrice = priceChrysanthemum + priceRoses + priceTulips;
        if(feastDay == 'Y'){
            totalPrice *= 1.15;
        }
        if(Tulips > 7 && season == 'Spring'){
            totalPrice*= 0.95;
        }
        if(Roses >= 10 && season == 'Winter'){
            totalPrice *= 0.9;
        }
        if(totalFlowers > 20){
            totalPrice *= 0.8;
        }
        console.log((totalPrice + 2).toFixed(2));
    }
    flowers([2,
        4,
        8,
        "Spring",
        "Y"])