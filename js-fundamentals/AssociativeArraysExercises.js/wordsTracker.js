function findWords(input) {
    let wordsToFind = input[0].split(' ');
    let words = input.slice(1);
    let result = {};

    for (let word of wordsToFind) {
        result[word] = 0;
    }

    for (let word of words) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }

    let sortedArray = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sortedArray) {
        console.log(`${key} - ${value}`);
    }
}

findWords([
    'this sentence',
    'In',
    'this',
    'sentence',
    'you',
    'have',
    'to',
    'count',
    'the',
    'occurrences',
    'of',
    'the',
    'words',
    'this',
    'and',
    'sentence',
    'because',
    'this',
    'is',
    'your',
    'task',
]);

findWords([
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
