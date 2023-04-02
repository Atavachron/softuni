function solve(input) {
    let notebook = {};
    let [wordsDefs, testWords, command] = input;

    let arr = wordsDefs.split(' | ');

    arr.forEach(entry => {
        let [word, definition] = entry.split(':');
        if (!notebook.hasOwnProperty(word)) {
            notebook[word] = [];
        }
        notebook[word].push(definition);
    });

    switch (command) {
        case 'Test':
            testWords.split(' | ').forEach(word => {
                if (notebook.hasOwnProperty(word)) {
                    console.log(`${word}:`);
                    notebook[word].forEach(definition => {
                        console.log(` -${definition.trim()}`);
                    });
                }
            });
            break;
        case 'Hand Over':
            console.log(Object.keys(notebook).join(' '));
            break;
    }
}

solve([
    'programmer: an animal, which turns coffee into code | developer: a magician',
    'fish | domino',
    'Hand Over',
]);

solve([
    'troubled | face: the front part of the head, from the forehead to the chin',
    'care | kitchen | flower',
    'Test',
]);

solve([
    'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'Test',
]);
