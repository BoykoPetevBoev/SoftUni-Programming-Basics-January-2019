function christmasHat(input) {
    let n = Number(input.shift());

    let columns = 4 * n + 1;
    let rows = 2 * n + 5;
    let center = 2 * n + 1;
    let left = center + 1 ;
    let right = center - 1;
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= columns; j++) {
            if (i == rows || i == rows - 2) {
                row += '*'
            }
            else if(i == rows - 1){
                if(j % 2 == 1){
                    row += '*'
                }
                else{
                    row += '.'
                }
            }
            else if( i == 1){
                if(j == center - 1){
                    row += '/'
                }
                else if(j == center){
                    row += '|'
                }
                else if(j == center + 1){
                    row += "\\"
                }
                else{
                    row += '.'
                }
            }
            else if( i == 2){
                if(j == center - 1){
                    row += '\\'
                }
                else if(j == center){
                    row += '|'
                }
                else if(j == center + 1){
                    row += "/"
                }
                else{
                    row += '.'
                }
            }
            else {
                if (j == center) {
                    row += '*';
                }
                else if(j == left){
                    row += '*';
                }
                else if(j == right){
                    row += '*';
                }
                else if(left < j && j < center){
                    row += '-';
                }
                else if(center < j && j < right){
                    row += '-'
                }
                else {
                    row += '.';
                }
            }

        }
        left--;
        right++;
        console.log(row);
    }


}
christmasHat([4])