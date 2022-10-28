function watch(input) {
    let movieName = input[0];
    let movieLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchLength = breakLength / 8;
    let restLength = breakLength / 4;

    let total = movieLength + lunchLength + restLength;

    let diff = Math.abs(breakLength - total);

    if (breakLength >= total) {
        console.log(
            `You have enough time to watch ${movieName} and left with ${Math.ceil(
                diff
            )} minutes free time.`
        );
    } else {
        console.log(
            `You don't have enough time to watch ${movieName}, you need ${Math.ceil(
                diff
            )} more minutes.`
        );
    }
}

watch(['Game of Thrones', '60', '96']);
watch(['Teen Wolf', '48', '60']);
