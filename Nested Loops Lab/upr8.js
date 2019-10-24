function cookiesFactory(input) {
    let num = Number(input.shift());

    for (let i = 1; i <= num; i++) {
        let f = false;
        let e = false;
        let s = false;
        let product = input.shift();
        while (product != 'Bake!') {           
            if (product == 'flour') {
                f = true;
            }
            else if (product == 'eggs') {
                e = true;
            }
            else if (product == 'sugar') {
                s = true;
            }
            product = input.shift();
            if(product == 'Bake!' && (!f || !e || !s)){
                console.log('The batter should contain flour, eggs and sugar!');  
                 product = input.shift();
            }
        }
             console.log(`Baking batch number ${i}...`);
    }
}
cookiesFactory([3, 'flour', 'eggs','jam','Bake!','sugar','Bake!'])
