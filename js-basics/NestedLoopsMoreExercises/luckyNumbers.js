//Generate a list of four-digit lucky numbers based on the following conditions:
//The sum of the first two digits must equal the sum of the last two digits
//Ths input number must be divided by the sum of the first two digits with no remainder

function generateLuckyNumbers(input) {
    let num = Number(input[0]);

    let output = '';
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (i + j === k + l && num % (i + j) === 0) {
                        output += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }
    console.log(output);
}

generateLuckyNumbers(['7']);
