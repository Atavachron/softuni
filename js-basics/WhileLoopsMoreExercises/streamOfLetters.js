function findCodedMessage(input) {
    let index = 0;
    let command = input[index];
    index++;

    let codedMessage = '';
    let endResult = '';

    let nAppears = false;
    let oAppears = false;
    let cAppears = false;

    while (command !== 'End') {
        // if (/^[a-zA-Z]+$/.test(command)) {
        if (
            (command >= 'A' && command <= 'Z') ||
            (command >= 'a' && command <= 'z')
        ) {
            if (command === 'n') {
                if (nAppears) {
                    codedMessage += command;
                } else {
                    nAppears = true;
                }
            } else if (command === 'o') {
                if (oAppears) {
                    codedMessage += command;
                } else {
                    oAppears = true;
                }
            } else if (command === 'c') {
                if (cAppears) {
                    codedMessage += command;
                } else {
                    cAppears = true;
                }
            } else {
                codedMessage += command;
            }

            if (cAppears && nAppears && oAppears) {
                endResult += codedMessage + ' ';
                codedMessage = '';
                oAppears = false;
                nAppears = false;
                cAppears = false;
            }

            command = input[index];
            index++;
        } else {
            command = input[index];
            index++;
            continue;
        }
    }
    console.log(endResult);
}

findCodedMessage([
    'H',
    'n',
    'e',
    'l',
    'l',
    'o',
    'o',
    'c',
    't',
    'c',
    'h',
    'o',
    'e',
    'r',
    'e',
    'n',
    'e',
    'End',
]);

// findCodedMessage([
//     '%',
//     '!',
//     'c',
//     '^',
//     'B',
//     '`',
//     'o',
//     '%',
//     'o',
//     'o',
//     'M',
//     ')',
//     '{',
//     'n',
//     '\\',
//     'A',
//     'D',
//     'End',
// ]);

// findCodedMessage([
//     'o',
//     'S',
//     '%',
//     'o',
//     'l',
//     '^',
//     'v',
//     'e',
//     'c',
//     'n',
//     '&',
//     'm',
//     'e',
//     'c',
//     'o',
//     'n',
//     'End',
// ]);
