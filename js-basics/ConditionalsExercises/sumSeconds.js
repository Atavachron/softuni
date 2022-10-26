//Sum the three times in seconds and log the results in minutes:seconds
//Make sure that seconds have a leading 0 if less than 10

function sumSeconds(input) {
    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);

    //Calculat the total time in seconds
    let totalTimeInSeconds = time1 + time2 + time3;
    //Calculate the minutes by dividing the seconds by 60 and using Math.floor
    let minutes = Math.floor(totalTimeInSeconds / 60);
    //Calculate the remaining seconds, by using % 60
    let seconds = totalTimeInSeconds % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(['35', '45', '44']);
sumSeconds(['22', '7', '34']);
sumSeconds(['50', '50', '49']);
sumSeconds(['14', '12', '10']);
