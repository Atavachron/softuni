//Create a function that accepts a number as a string (first element in array)
//and logs Excellent! if the number is more than 5.5

function logExcellentResult(input) {
    let result = Number(input[0]);

    if (result >= 5.5) {
        console.log('Excellent!');
    }
}

logExcellentResult(['6']);
logExcellentResult(['5.49']);
logExcellentResult(['5.5']);
