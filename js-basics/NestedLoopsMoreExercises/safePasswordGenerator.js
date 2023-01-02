function generatePassword(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let max = Number(input[2]);
    let stop = false;
    let output = '';

    for (let i = 35; i <= 55; i++) {
        for (let j = 64; j <= 96; j++) {
            for (let k = 1; k <= a; k++) {
                for (let l = 1; l <= b; l++) {
                    output +=
                        String.fromCharCode(i) +
                        String.fromCharCode(j) +
                        String(k) +
                        String(l) +
                        String.fromCharCode(j) +
                        String.fromCharCode(i) +
                        '|';
                    i++;
                    j++;
                    max--;

                    if (i > 55) i = 35;
                    if (j > 96) j = 64;

                    if ((a === k && l === b) || max <= 0) {
                        stop = true;
                        break;
                    }
                }
                if (stop) break;
            }
            if (stop) break;
        }
        if (stop) break;
    }
    console.log(output);
}

// generatePassword(['2', '3', '10']);
generatePassword(['20', '50', '10']);
