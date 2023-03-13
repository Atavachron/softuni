function countStringOccurrences(text, word) {
    let arr = text.split(' ');
    let counter = 0;
    for (let elem of arr) {
        if (elem === word) {
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
