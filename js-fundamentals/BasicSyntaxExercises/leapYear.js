function checkIfLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

checkIfLeapYear(1984);
checkIfLeapYear(2003);
checkIfLeapYear(4);
