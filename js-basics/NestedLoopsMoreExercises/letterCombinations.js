function logLetterCombinations(input) {
    let startLetter = input[0];
    let skipLetter = input[2];
    let endLetter = input[1];

    let output = '';
    let counter = 0;

    for (let i = startLetter.charCodeAt(0); i <= endLetter.charCodeAt(0); i++) {
        if (String.fromCharCode(i) === skipLetter) {
            continue;
        }

        for (
            let j = startLetter.charCodeAt(0);
            j <= endLetter.charCodeAt(0);
            j++
        ) {
            if (String.fromCharCode(j) === skipLetter) {
                continue;
            }
            for (
                let k = startLetter.charCodeAt(0);
                k <= endLetter.charCodeAt(0);
                k++
            ) {
                if (String.fromCharCode(k) === skipLetter) {
                    continue;
                }
                output +=
                    `${String.fromCharCode(i)}${String.fromCharCode(
                        j
                    )}${String.fromCharCode(k)}` + ' ';
                counter++;
            }
        }
    }

    console.log(output + counter);
}

logLetterCombinations(['a', 'c', 'b']);
