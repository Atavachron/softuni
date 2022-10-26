// Create a function that will accept two numbers as arguments and log the greater number
// The numbers will be passed as the first two elements of an array of strings.

function logGreaterNumber(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

logGreaterNumber(['6', '5']);
