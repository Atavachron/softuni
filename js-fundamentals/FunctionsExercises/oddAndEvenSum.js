function sumEvenAndOddDigits(num) {
    let numAsString = String(num);

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let digit = Number(numAsString[i]);

        digit % 2 === 0 ? (evenSum += digit) : (oddSum += digit);
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(sumEvenAndOddDigits(1000435));
console.log(sumEvenAndOddDigits(3495892137259234));
