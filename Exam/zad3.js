function gymnastics(input)
{
    let country = input.shift();
    let instrument = input.shift();

    let grade = 0;
    if(country == 'Russia'){
        if(instrument == 'ribbon'){
            grade = 9.100 + 9.400;
        }
        else if(instrument == 'hoop'){
            grade = 9.300 + 9.800;
        }
        else if(instrument == 'rope'){
            grade = 9.600 + 9.000;
        }
    }
    else if(country == 'Bulgaria'){
        if(instrument == 'ribbon'){
            grade = 9.600 + 9.400;
        }
        else if(instrument == 'hoop'){
            grade = 9.550 + 9.750;
        }
        else if(instrument == 'rope'){
            grade = 9.500 + 9.400;
        }
    }
    else if(country == 'Italy'){
        if(instrument == 'ribbon'){
            grade = 9.200 + 9.500;
        }
        else if(instrument == 'hoop'){
            grade = 9.450 + 9.350;
        }
        else if(instrument == 'rope'){
            grade = 9.700 + 9.150;
        }
    }
    let diff = 20 - grade;
    let diffPercentage = (diff / 20) * 100;
    console.log(`The team of ${country} get ${grade.toFixed(3)} on ${instrument}.`);
    console.log(`${diffPercentage.toFixed(2)}%`)
}
gymnastics(['Russia' , 'rope'])