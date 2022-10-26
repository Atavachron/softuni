//Check if a number falls within the range 100 - 200 and log the corresponding messag

function checkNumber(input) {
    let num = Number(input[0]);

    if (num < 100) {
        console.log('Less than 100');
    } else if (num <= 200) {
        console.log('Between 100 and 200');
    } else {
        console.log('Greater than 200');
    }
}

checkNumber(['95']);
checkNumber(['100']);
checkNumber(['200']);
