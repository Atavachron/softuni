function printFirstAndLastK(numbers) {
    let num = numbers[0];
    let first = numbers.slice(1, num + 1);
    let second = numbers.slice(-num);

    let output = first.join(' ') + '\n' + second.join(' ');
    return output;
}

console.log(printFirstAndLastK([2, 7, 8, 9]));
console.log(printFirstAndLastK([3, 6, 7, 8, 9]));
