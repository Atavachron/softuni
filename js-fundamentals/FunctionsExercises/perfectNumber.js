function checkIfPerfect(num) {
    let sum = 0;

    if (num % 1 === 0 && num > 0) {
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
    }

    return num === sum ? `We have a perfect number!` : `It's not so perfect.`;
}

console.log(checkIfPerfect(6));
console.log(checkIfPerfect(28));
console.log(checkIfPerfect(1236498));
