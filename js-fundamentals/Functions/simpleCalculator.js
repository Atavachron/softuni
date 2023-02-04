function runCalculator(a, b, operator) {
    let multiply = (x, y) => x * y;
    let add = (x, y) => x + y;
    let divide = (x, y) => x / y;
    let subtract = (x, y) => x - y;

    return calculate();

    function calculate() {
        let result;

        switch (operator) {
            case 'multiply':
                result = multiply(a, b);
                break;
            case 'add':
                result = add(a, b);
                break;
            case 'divide':
                result = divide(a, b);
                break;
            case 'subtract':
                result = subtract(a, b);
                break;
        }

        return result;
    }
}

console.log(runCalculator(3, 5, 'add'));
