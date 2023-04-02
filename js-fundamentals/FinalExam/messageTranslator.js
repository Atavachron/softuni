function solve(input) {
    let regularExpression =
        /^!(?<command>[A-Z][a-z]+)!:\[(?<message>[A-Za-z]+)\]$/;
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let currentMessage = input[i];
        let match = currentMessage.match(regularExpression);

        if (!match) {
            console.log('The message is invalid');
        } else {
            let { command, message } = match.groups;
            let translation = message
                .split('')
                .map(char => char.charCodeAt())
                .join(' ');

            console.log(`${command}: ${translation}`);
        }
    }
}

solve(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]']);
