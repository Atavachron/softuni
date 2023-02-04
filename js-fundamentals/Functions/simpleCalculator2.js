function runCalculator(a, b, operator) {
    let obj = {
        multiply(x, y) {
            return x * y;
        },
        divide(x, y) {
            return x / y;
        },
        add(x, y) {
            return x + y;
        },
        subtract(x, y) {
            return x - y;
        },
    };

    return calculate();

    function calculate() {
        return obj[operator](a, b);
    }
}

console.log(runCalculator(3, 5, 'add'));
