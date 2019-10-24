function grades(input) {
    let students = Number(input.shift());

    let average = 0;
    let top = 0;
    let fourToFive = 0;
    let threeToFour = 0;
    let fail = 0;
    for (let i = 1; i <= students; i++) {
        let grade = Number(input.shift());
        average += grade;
        if (grade >= 5) {
            top++;
         }
        else if (4 <= grade && grade < 5) {
            fourToFive++;
         }
        else if (3 <= grade && grade < 4) {
            threeToFour++;
         }
        else if (grade < 3) { 
            fail++;
        }
    }
    top = top / students * 100;
    fourToFive = fourToFive / students * 100;
    threeToFour = threeToFour / students * 100;
    fail = fail / students * 100;
    average /= students;
    console.log(`Top students: ${top.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${fourToFive.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${threeToFour.toFixed(2)}%`);
    console.log(`Fail: ${fail.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}
grades([6, 2, 3, 4, 5, 6, 2.2])