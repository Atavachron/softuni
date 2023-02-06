function checkIfPalindromes(arr) {
    for (let num of arr) {
        let numAsString = String(num);
        checkNum(numAsString);
    }

    function checkNum(currentNum) {
        let isPalindrome = true;
        for (let i = 0; i < currentNum.length / 2; i++) {
            if (currentNum[i] !== currentNum[currentNum.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }
        console.log(isPalindrome);
    }
}

console.log(checkIfPalindromes([123, 323, 421, 121]));
