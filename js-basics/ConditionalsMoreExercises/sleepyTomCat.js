function canTomSleepWell(input) {
    let offDays = Number(input[0]);
    let acceptablePlayTime = 30000;

    let workDays = 365 - offDays;

    let workDaysPlayTime = workDays * 63;
    let offDaysPlayTime = offDays * 127;

    let totalPlayTime = workDaysPlayTime + offDaysPlayTime;

    let diff = Math.abs(acceptablePlayTime - totalPlayTime);
    let hours = Math.floor(diff / 60);
    let minutes = diff % 60;

    if (totalPlayTime > acceptablePlayTime) {
        console.log('Tom will run away');
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}

canTomSleepWell(['20']);
canTomSleepWell(['113']);
