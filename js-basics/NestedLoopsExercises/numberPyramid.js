//Log a pyramid of numbers based on a input of one number

function logNumberPyramid(input) {
    let n = Number(input[0]);

    let current = 1;
    let isBigger = false;

    for (let rows = 1; rows <= n; rows++) {
        let currentLine = '';

        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }

            currentLine += current + ' ';
            current++;
        }

        console.log(currentLine);
        if (isBigger) {
            break;
        }
    }
}

logNumberPyramid(['7']);
