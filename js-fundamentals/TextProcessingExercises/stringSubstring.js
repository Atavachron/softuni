function checkText(searchWord, text) {
    let words = text.split(' ');

    for (let word of words) {
        if (word.toLowerCase() === searchWord.toLowerCase()) {
            return searchWord;
        }
    }

    return `${searchWord} not found!`;
}

console.log(
    checkText('javascript', 'JavaScript is the best programming language')
);
console.log(checkText('python', 'JavaScript is the best programming language'));
