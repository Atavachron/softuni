function replaceRepeatingChars(str) {
    let index = 1;
    let result = str[0];

    //Check if the current char is the same like the previous one.
    //If same, do nothing. If different, add the char the result
    while (index < str.length) {
        if (str[index] !== str[index - 1]) {
            result += str[index];
        }
        index++;
    }
    return result;
}

console.log(replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'));
