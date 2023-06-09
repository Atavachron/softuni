function solve(arr, str) {
    let sorted;
    if (str === 'asc') {
        sorted = arr.sort((a, b) => a - b);
    } else if (str === 'desc') {
        sorted = arr.sort((a, b) => b - a);
    }
    return sorted;
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));
