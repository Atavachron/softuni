function solve(input) {
    let index = 0;
    let command = input[index];
    index++;

    let mostPowerfulWord = '';
    let highestScore = 0;

    while (command !== 'End of words') {
        let currentWord = command;
        let currentScore = 0;

        for (let i = 0; i < currentWord.length; i++) {
            let currentLetter = currentWord[i];
            currentScore += currentLetter.charCodeAt(0);
        }

        switch (currentWord[0]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
            case 'Y':
                currentScore *= currentWord.length;
                break;
            default:
                currentScore = Math.floor(currentScore / currentWord.length);
        }

        if (currentScore >= highestScore) {
            highestScore = currentScore;
            mostPowerfulWord = currentWord;
        }

        command = input[index];
        index++;
    }

    console.log(
        `The most powerful word is ${mostPowerfulWord} - ${highestScore}`
    );
}

solve(['The', 'Most', 'Powerful', 'Word', 'Is', 'Experience', 'End of words']);
solve(['But', 'Some', 'People', 'Say', "It's", 'LOVE', 'End of words']);
