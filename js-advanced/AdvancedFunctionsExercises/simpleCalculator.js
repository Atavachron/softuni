function calculator() {
    let num1Selector, num2Selector, resultSelector;

    const init = function (selector1, selector2, result) {
        num1Selector = selector1;
        num2Selector = selector2;
        resultSelector = result;
    };

    const add = function () {
        const num1 =
            parseFloat(document.querySelector(num1Selector).value) || 0;
        const num2 =
            parseFloat(document.querySelector(num2Selector).value) || 0;
        const sum = num1 + num2;
        document.querySelector(resultSelector).value = sum;
    };

    const subtract = function () {
        const num1 =
            parseFloat(document.querySelector(num1Selector).value) || 0;
        const num2 =
            parseFloat(document.querySelector(num2Selector).value) || 0;
        const difference = num1 - num2;
        document.querySelector(resultSelector).value = difference;
    };

    return {
        init,
        add,
        subtract,
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
