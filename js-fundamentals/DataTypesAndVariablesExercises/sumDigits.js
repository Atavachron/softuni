function sumDigits(num) {
    let numAsString = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let digit = Number(numAsString[i]);
        sum += digit;
    }

    console.log(sum);
}

sumDigits(97561);
