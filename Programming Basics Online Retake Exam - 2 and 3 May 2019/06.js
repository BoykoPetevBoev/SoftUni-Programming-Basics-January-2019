function vetParking(input)
    {
        let days = Number(input.shift());
        let hours = Number(input.shift());
        
        let totalPrice = 0;
        for(let i = 1; i <= days ; i++){
            let pricePerDay = 0;
            for(let j = 1; j <= hours; j++){
                if(i % 2 == 0 && j % 2 != 0){
                    pricePerDay += 2.50;
                }
                else if(i % 2 != 0 && j % 2 == 0){
                    pricePerDay += 1.25; 
                }
                else{
                    pricePerDay ++;
                }
            }
            totalPrice += pricePerDay;
            console.log(`Day: ${i} - ${pricePerDay.toFixed(2)} leva`);
        }
        console.log(`Total: ${totalPrice.toFixed(2)} leva`)
    }
    vetParking([2, 5])