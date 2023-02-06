function divideFactorials(num1, num2) {
    function factorial(a) {
        if (a === 0) {
            return 1;
        } else {
            return a * factorial(a - 1);
        }
    }

    return (factorial(num1) / factorial(num2)).toFixed(2);
}

console.log(divideFactorials(5, 2));
