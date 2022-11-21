function readPassword(input) {
    let user = input[0];
    let password = input[1];
    let index = 2;
    let userInput = input[index];
    index++;

    while (true) {
        if (userInput === password) {
            console.log(`Welcome ${user}!`);
            break;
        }
        userInput = input[index];
        index++;
    }
}

// readPassword(['Nakov', '1234', 'Pass', '1324', '1234']);
readPassword(['Gosho', 'secret', 'secret']);
