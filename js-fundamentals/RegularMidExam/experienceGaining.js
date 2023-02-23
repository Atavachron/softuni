function collectExperience(input) {
    let experienceNeeded = input.shift();
    let battleCount = input.shift();
    let totalExperience = 0;
    let battlesPlayed = 0;

    for (let i = 1; i <= battleCount; i++) {
        battlesPlayed++;
        let currentExperience = input[i - 1];
        if (i % 15 === 0) {
            totalExperience +=
                currentExperience + (currentExperience * 5) / 100;
        } else if (i % 5 === 0) {
            totalExperience +=
                currentExperience - (currentExperience * 10) / 100;
        } else if (i % 3 === 0) {
            totalExperience +=
                currentExperience + (currentExperience * 15) / 100;
        } else {
            totalExperience += currentExperience;
        }
        if (totalExperience >= experienceNeeded) break;
    }

    return totalExperience >= experienceNeeded
        ? `Player successfully collected his needed experience for ${battlesPlayed} battles.`
        : `Player was not able to collect the needed experience, ${(
              experienceNeeded - totalExperience
          ).toFixed(2)} more needed.`;
}

console.log(collectExperience([500, 5, 50, 100, 200, 100, 30]));
console.log(collectExperience([500, 5, 50, 100, 200, 100, 20]));
console.log(collectExperience([400, 5, 50, 100, 200, 100, 20]));
