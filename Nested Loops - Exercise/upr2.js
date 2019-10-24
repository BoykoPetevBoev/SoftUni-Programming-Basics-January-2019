function pyramid(input) {
    let num = Number(input);

    let result = 0;
    
    for (let i = 1; i <= num; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            result++;
            if(result > num){
                break;
            }
            row += `${result} `;
        }
        console.log(row);
    }

}
pyramid([10])