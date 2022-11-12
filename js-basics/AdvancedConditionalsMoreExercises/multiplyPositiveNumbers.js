function multiplyPositiveNumbers(input) {
    let index = 0;
    let num = Number(input[index]);

    while (num >= 0) {
        let result = num * 2;
        console.log(`Result: ${result.toFixed(2)}`);

        index++;
        num = Number(input[index]);

        if (num < 0) {
            console.log('Negative number!');
            break;
        }
    }
}

multiplyPositiveNumbers(['12', '43.2144', '12.3', '543.23', '-20']);
