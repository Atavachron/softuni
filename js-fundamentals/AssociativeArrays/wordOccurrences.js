function calculateWordOccurrences(input) {
    let obj = {};

    for (let word of input) {
        if (!obj[word]) {
            obj[word] = 1;
        } else {
            obj[word]++;
        }
    }

    let sorted = Object.entries(obj).sort(
        ([keyA, valueA], [keyB, valueB]) => valueB - valueA
    );

    for (let el of sorted) {
        console.log(`${el[0]} -> ${el[1]} times`);
    }
}

calculateWordOccurrences([
    'Here',
    'is',
    'the',
    'first',
    'sentence',
    'Here',
    'is',
    'another',
    'sentence',
    'And',
    'finally',
    'the',
    'third',
    'sentence',
]);
