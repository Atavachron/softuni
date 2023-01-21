function reverseChars(char1, char2, char3) {
    let reversed = Array.from(arguments).reverse().join(' ');
    console.log(reversed);
}

reverseChars('A', 'B', 'C');
