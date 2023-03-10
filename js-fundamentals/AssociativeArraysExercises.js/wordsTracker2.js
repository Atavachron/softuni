function countWords(input) {
    let wordsToFind = input[0].split(' ');
    let words = input.slice(1);

    let result = new Map();

    for (let word of wordsToFind) {
        result.set(word, 0);
    }

    for (let word of words) {
        if (result.has(word)) {
            result.set(word, result.get(word) + 1);
        }
    }

    let sortedArr = [...result].sort((a, b) => b[1] - a[1]);

    sortedArr.forEach(([key, value]) => {
        console.log(`${key} - ${value}`);
    });
}

countWords([
    'is the',

    'first',
    'sentence',
    'Here',
    'is',

    'another',
    'the',
    'And',
    'finally',
    'the',

    'the',
    'sentence',
]);
