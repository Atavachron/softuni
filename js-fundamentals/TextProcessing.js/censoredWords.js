function censor(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, censorWord(word));
    }

    return text;

    function censorWord(word) {
        return '*'.repeat(word.length);
    }
}

console.log(
    censor(
        'A small sentence with some small words',

        'small'
    )
);
