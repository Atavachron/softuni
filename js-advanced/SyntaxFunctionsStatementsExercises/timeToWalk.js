// Write a function that calculates how long it takes a student to get to university.
// The function takes three numbers:
//  The first is the number of steps the student takes from their home to the university
//  Тhe second number is the length of the student's footprint in meters
//  Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1-minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following
// format: `hours:minutes:seconds`.
// The input comes as three numbers.
// The output should be printed on the console.

function solve(steps, footprint, speed) {
    let distanceInMeters = steps * footprint;
    let breaks = Math.floor(distanceInMeters / 500);
    let speedInMetersPerSecond = speed / 3.6;

    let walkingTimeInSeconds = distanceInMeters / speedInMetersPerSecond;
    let totalTime = walkingTimeInSeconds + breaks * 60;

    let hours = Math.floor(totalTime / 3600)
        .toFixed(0)
        .padStart(2, '0');
    let minutes = Math.floor((totalTime / 60) % 60)
        .toFixed(0)
        .padStart(2, '0');
    let seconds = (totalTime % 60).toFixed(0, '2');

    console.log(`${hours}:${minutes}:${seconds}`);
}

solve(4000, 0.6, 5);
