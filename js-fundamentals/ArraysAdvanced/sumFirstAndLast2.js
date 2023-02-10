function sumFirstAndLast(input) {
    let firstEl = Number(input.shift());
    let lastEl = Number(input.pop());

    let sum = firstEl + lastEl;
    return sum;
}

console.log(sumFirstAndLast(['10', '20', '30']));
