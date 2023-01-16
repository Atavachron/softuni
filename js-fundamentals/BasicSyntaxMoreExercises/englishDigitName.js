function getLastDigitName(num) {
    let numAsString = '' + num;
    let lastDigit = numAsString[numAsString.length - 1];
    let lastDigitName;

    switch (lastDigit) {
        case '1':
            lastDigitName = 'one';
            break;
        case '2':
            lastDigitName = 'two';
            break;
        case '3':
            lastDigitName = 'three';
            break;
        case '4':
            lastDigitName = 'four';
            break;
        case '5':
            lastDigitName = 'five';
            break;
        case '6':
            lastDigitName = 'six';
            break;
        case '7':
            lastDigitName = 'seven';
            break;
        case '8':
            lastDigitName = 'eight';
            break;
        case '9':
            lastDigitName = 'nine';
            break;
        case '0':
            lastDigitName = 'zero';
            break;
    }
    console.log(lastDigitName);
}

getLastDigitName(512);
getLastDigitName(1);
getLastDigitName(1643);
