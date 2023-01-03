function solve(input) {
    let firstPairStartValue = Number(input[0]);
    let secondPairStartValue = Number(input[1]);
    let firstPairRange = Number(input[2]);
    let secondPairRange = Number(input[3]);

    let firstPairEndValue = firstPairStartValue + firstPairRange;
    let secondPairEndValue = secondPairStartValue + secondPairRange;

    function isNotPrime(num) {
        for (let divider = 2; divider < num; divider++) {
            if (num % divider === 0) {
                return true;
            }
        }
        return false;
    }

    for (let i = firstPairStartValue; i <= firstPairEndValue; i++) {
        for (let j = secondPairStartValue; j <= secondPairEndValue; j++) {
            if (!isNotPrime(i) && !isNotPrime(j)) {
                console.log(`${i}${j}`);
            }
        }
    }
}

solve(['10', '20', '5', '5']);
// solve(['10', '30', '9', '6']);
