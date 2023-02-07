function modifyNumber(num) {
    let numAsString = String(num);

    while (calculateAverage(numAsString) <= 5) {
        numAsString += 9;
    }

    function calculateAverage(input) {
        let total = 0;
        for (let i = 0; i < input.length; i++) {
            let current = Number(input[i]);
            total += current;
        }

        let average = total / input.length;
        return average;
    }

    return numAsString;
}

console.log(modifyNumber(101));
console.log(modifyNumber(5835));
