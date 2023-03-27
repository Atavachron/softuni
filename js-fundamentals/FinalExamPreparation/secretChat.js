function secretChat(input) {
    let message = input.shift();

    let currentElement = input.shift();

    while (currentElement !== 'Reveal') {
        let [command, token1, token2] = currentElement.split(':|:');

        switch (command) {
            case 'ChangeAll':
                while (message.includes(token1)) {
                    message = message.replace(token1, token2);
                }
                console.log(message);
                break;
            case 'Reverse':
                if (message.includes(token1)) {
                    let reversed = token1.split('').reverse().join('');
                    message = message.replace(token1, '');
                    message += reversed;
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;
            case 'InsertSpace':
                message =
                    message.slice(0, token1) + ' ' + message.slice(token1);
                console.log(message);
                break;
        }

        currentElement = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'Hiware?uiy',

    'ChangeAll:|:i:|:o',

    'Reverse:|:?uoy',

    'Reverse:|:jd',

    'InsertSpace:|:3',

    'InsertSpace:|:7',

    'Reveal',
]);
console.log('----------');
secretChat([
    'heVVodar!gniV',

    'ChangeAll:|:V:|:l',

    'Reverse:|:!gnil',

    'InsertSpace:|:5',

    'Reveal',
]);

// function revealMessage(inputArr) {
//     let message = inputArr.shift();
//     let currentCommand = inputArr.shift();

//     while (currentCommand !== "Reveal") {
//       let [command, arg1, arg2] = currentCommand.split(":|:");

//       if (command === "InsertSpace") {
//         message = message.slice(0, arg1) + " " + message.slice(arg1);
//         console.log(message);
//       } else if (command === "Reverse") {
//         if (message.includes(arg1)) {
//           let reversedSubstring = arg1.split("").reverse().join("");
//           message = message.replace(arg1, "");
//           message += reversedSubstring;
//           console.log(message);
//         } else {
//           console.log("error");
//         }
//       } else if (command === "ChangeAll") {
//         while (message.includes(arg1)) {
//           message = message.replace(arg1, arg2);
//         }
//         console.log(message);
//       }

//       currentCommand = inputArr.shift();
//     }

//     console.log(`You have a new text message: ${message}`);
//   }
