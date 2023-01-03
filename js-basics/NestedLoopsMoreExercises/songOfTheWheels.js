function solve(input) {
    let num = Number(input[0]);
    let output = '';
    let isFound = false;
    let counter = 0;
    let password = '';

    for (let i = 4; i <= 144; i++) {
        for (let a = 1; a <= 9; a++) {
            for (let b = 1; b <= 9; b++) {
                for (let c = 1; c <= 9; c++) {
                    for (let d = 1; d <= 9; d++) {
                        if (
                            a < b &&
                            c > d &&
                            num === a * b + c * d &&
                            num === i
                        ) {
                            output += `${a}${b}${c}${d} `;
                            counter++;
                            if (counter === 4) {
                                password = `${a}${b}${c}${d}`;
                                isFound = true;
                            }
                        }
                    }
                }
            }
        }
    }
    if (isFound) {
        console.log(output);
        console.log(`Password: ${password}`);
    } else if (output) {
        console.log(output);
        console.log('No!');
    } else {
        console.log('No!');
    }
}

solve(['11']);
solve(['110']);
solve(['55']);
