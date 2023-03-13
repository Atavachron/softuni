function countStringOccurrences(text, searchedWord) {
    let words = text.split(' ');
    let counter = 0;
    for (let word of words) {
        if (word === searchedWord) {
            counter++;
        }
    }

    return counter;
}

console.log(
    countStringOccurrences('This is a word and it also is a sentence', 'is')
);

console.log(
    countStringOccurrences(
        'softuni is great place for learning new programming languages',
        'softuni'
    )
);
