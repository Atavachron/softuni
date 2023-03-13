function replaceRepeatingChars(str) {
    let index = 1;
    let result = str[0];

    while (index < str.length) {
        if (str[index] !== str[index - 1]) {
            result += str[index];
        }
        index++;
    }
    return result;
}

console.log(replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'));
