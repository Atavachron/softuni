function printCharactersInRange(char1, char2) {
    let a = char1.charCodeAt(0);
    let b = char2.charCodeAt(0);

    let start = Math.min(a, b);
    let end = Math.max(a, b);

    let output = '';

    for (let i = start + 1; i < end; i++) {
        output += String.fromCharCode(i) + ' ';
    }

    return output.trim();
}

console.log(printCharactersInRange('a', 'd'));
console.log(printCharactersInRange('#', ':'));
console.log(printCharactersInRange('C', '#'));
