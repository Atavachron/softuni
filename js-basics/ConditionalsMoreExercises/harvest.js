function calculateWineOutput(input) {
    let vineyardArea = Number(input[0]);
    let grapesHarvestPerSqM = Number(input[1]);
    let litresWineNeeded = Number(input[2]);
    let workerCount = Number(input[3]);

    let totalGrapesHarvest = vineyardArea * grapesHarvestPerSqM;
    //40% of the grapes will be used to make wine
    let grapesForWine = totalGrapesHarvest * 0.4;
    //2.5 kg of grapes are used to produce a liter of wine
    let wineProduced = grapesForWine / 2.5;

    let diff = Math.abs(litresWineNeeded - wineProduced);

    if (litresWineNeeded > wineProduced) {
        console.log(
            `It will be a tough winter! More ${Math.floor(
                diff
            )} liters wine needed.`
        );
    } else {
        console.log(
            `Good harvest this year! Total wine: ${Math.floor(
                wineProduced
            )} liters.`
        );
        console.log(
            `${Math.ceil(diff)} liters left -> ${Math.ceil(
                diff / workerCount
            )} liters per person.`
        );
    }
}

calculateWineOutput(['650', '2', '175', '3']);
calculateWineOutput(['1020', '1.5', '425', '4']);
