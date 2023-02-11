function processArray(arr) {
    let result = [];

    for (let el of arr) {
        let num = Number(el);
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    return result.join('\n');
}

console.log(processArray(['7', '-2', '8', '9']));
console.log(processArray(['3', '-2', '0', '-1']));
