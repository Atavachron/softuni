function sumFirstAndLast(input) {
    let first = Number(input[0]);
    let last = Number(input[input.length - 1]);

    let sum = first + last;
    return sum;
}

console.log(sumFirstAndLast(['20', '30', '40']));
