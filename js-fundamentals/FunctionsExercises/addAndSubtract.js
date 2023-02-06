function addAndSubtract(num1, num2, num3) {
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    return subtract(add(num1, num2), num3);
}

console.log(addAndSubtract(23, 6, 10));
