function printSpecialNumbers(upperLimit) {
    for (let i = 1; i <= upperLimit; i++) {
        let num = i.toString();
        let sum = 0;
        for (let j = 0; j < num.length; j++) {
            let digit = Number(num[j]);
            sum += digit;
        }
        console.log(
            sum === 5 || sum === 7 || sum === 11
                ? `${num} -> True`
                : `${num} -> False`
        );
    }
}

printSpecialNumbers(15);
