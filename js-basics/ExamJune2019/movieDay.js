function solve(input) {
    let timeAvailable = Number(input[0]);
    let sceneCount = Number(input[1]);
    let sceneDuration = Number(input[2]);

    let preparationTime = timeAvailable * 0.15;
    let totalScenesDuration = sceneCount * sceneDuration;
    let timeNeeded = preparationTime + totalScenesDuration;
    let diff = Math.abs(timeAvailable - timeNeeded);

    if (timeAvailable >= timeNeeded) {
        console.log(
            `You managed to finish the movie on time! You have ${Math.round(
                diff
            )} minutes left!`
        );
    } else {
        console.log(
            `Time is up! To complete the movie you need ${Math.round(
                diff
            )} minutes.`
        );
    }
}

solve(['120', '10', '11']);
solve(['60', '15', '3']);
