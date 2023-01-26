function sumEvenNumbers(input) {
    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }

    console.log(input);
    let sum = 0;

    for (const element of input) {
        if (element % 2 === 0) {
            sum += element;
        }
    }

    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);
