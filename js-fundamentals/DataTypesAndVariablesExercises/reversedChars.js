function reverseChars(char1, char2, char3) {
    let reversed = '';
    for (let i = arguments.length - 1; i >= 0; i--) {
        reversed += arguments[i] + ' ';
    }
    console.log(reversed.trim());
}

reverseChars('A', 'B', 'C');
