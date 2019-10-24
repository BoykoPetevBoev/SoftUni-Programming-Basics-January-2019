function building(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());


    for (let i = floors; i > 0; i--) {
        let result = ""
        if (floors == i) {
            for (let j = 0; j < rooms; j++) {
                result += `L${i}${j} `
            }
        }
        else {
            for (let j = 0; j < rooms; j++) {
                if (i % 2 == 0) {
                    result += `O${i}${j} `;
                }
                else {
                    result += `A${i}${j} `;
                }
            }
        }
        console.log(result);
    }
}
building([6, 4])