// Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an
// error message if the string is not recognized.
// The input comes as a single-string argument.
// The output should be returned as a result.

function solve(input) {
    let output;

    switch (input) {
        case 'Monday':
            output = 1;
            break;
        case 'Tuesday':
            output = 2;
            break;
        case 'Wednesday':
            output = 3;
            break;
        case 'Thursday':
            output = 4;
            break;
        case 'Friday':
            output = 5;
            break;
        case 'Saturday':
            output = 6;
            break;
        case 'Sunday':
            output = 7;
            break;
        default:
            output = 'error';
            break;
    }

    return output;
}

solve('Monday');
solve('Friday');
solve('Invalid');
