function printSpecialWords(input) {
    let words = input.split(' ');
    let result = [];

    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            let flag = true;

            let wordLower = word.toLowerCase();
            for (let i = 1; i < wordLower.length; i++) {
                if (
                    wordLower.charCodeAt(i) < 97 ||
                    wordLower.charCodeAt(i) > 122
                ) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                result.push(word.slice(1));
            }
        }
    }

    result.forEach(word => console.log(word));
}

printSpecialWords(
    'Nowadays everyone uses # to tag a #special word in #socialMedia'
);
