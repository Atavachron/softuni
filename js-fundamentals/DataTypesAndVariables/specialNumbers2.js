function printSpecialNumbers(upperLimit) {
    for (let i = 1; i <= upperLimit; i++) {
        let num = i;
        let sum = 0;

        while (num > 0) {
            //Get last digit by using remainder operator
            let digit = num % 10;
            sum += digit;

            //Remove the last digit by dividing by ten and cutting the float (may use parseInt as well)
            num = Math.trunc(num / 10);
        }

        console.log(
            sum === 5 || sum === 7 || sum === 11
                ? `${i} -> True`
                : `${i} -> False`
        );
    }
}

printSpecialNumbers(15);
