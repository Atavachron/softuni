function findMaxSequence(arr) {
    let maxSequence = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let currentSequence = [currentNum];

        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if (currentNum === nextNum) {
                currentSequence.push(nextNum);
            } else {
                break;
            }
        }

        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }
    }

    console.log(maxSequence.join(' '));
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
findMaxSequence([4, 4, 4, 4]);
findMaxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
