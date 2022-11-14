function logNumbersEndingIn7() {
    for (let i = 1; i <= 1000; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}

// Alternative solution

// function logNumbersEndingIn7() {
//     for (i = 7; i <= 1000; i += 10) {
//         console.log(i);
//     }
// }

logNumbersEndingIn7();
