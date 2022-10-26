//Check if a password input is the same as a pre-determined password.

function checkPassword(input) {
    let userInput = input[0];
    let staticPassword = 's3cr3t!P@ssw0rd';

    if (userInput === staticPassword) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}

checkPassword(['qwerty']);
checkPassword(['s3cr3t!P@ssw0rd']);
