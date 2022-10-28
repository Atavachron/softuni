function beatSwimmingRecord(input) {
    let currentRecord = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let swimmingTime = distanceInMeters * secondsPerMeter;
    let slowDownCount = Math.floor(distanceInMeters / 15);

    swimmingTime += slowDownCount * 12.5;

    let diff = Math.abs(currentRecord - swimmingTime);

    if (currentRecord > swimmingTime) {
        console.log(
            `Yes, he succeeded! The new world record is ${swimmingTime.toFixed(
                2
            )} seconds.`
        );
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

beatSwimmingRecord(['10464', '1500', '20']);
beatSwimmingRecord(['55555.67', '3017', '5.03']);
