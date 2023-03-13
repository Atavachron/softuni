function revealWords(words, text) {
    let wordArr = words.split(', ');
    let textArr = text.split(' ');

    for (let word of wordArr) {
        let censoredWord = '*'.repeat(word.length);

        for (let el of textArr) {
            if (el === censoredWord) {
                text = text.replace(censoredWord, word);
            }
        }
    }

    return text;
}

console.log(
    revealWords(
        'great',
        'softuni is ***** place for learning new programming languages'
    )
);

console.log(
    revealWords(
        'great, learning',
        'softuni is ***** place for ******** new programming languages'
    )
);
