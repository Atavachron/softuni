function calc() {
    // TODO: sum = num1 + num2
    let input1El = document.getElementById('num1');
    let input2El = document.getElementById('num2');
    let sumEl = document.getElementById('sum');

    let num1 = Number(input1El.value);
    let num2 = Number(input2El.value);
    let result = num1 + num2;

    sumEl.value = result;
}
