function logIn(input) {
    let username = input[0];
    let password = '';
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    let index = 1;
    let command = input[index];
    index++;

    let logInAttempts = 0;

    while (command !== password) {
        logInAttempts++;

        if (logInAttempts === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }

        console.log(`Incorrect password. Try again.`);

        command = input[index];
        index++;
    }

    if (command === password) {
        console.log(`User ${username} logged in.`);
    }
}

logIn(['Acer', 'login', 'go', 'let me in', 'recA']);
logIn(['momo', 'omom']);
logIn(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
