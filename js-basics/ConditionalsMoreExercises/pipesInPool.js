function calculateWater(input) {
    let poolVolume = Number(input[0]);
    let pipeOneDebit = Number(input[1]);
    let pipeTwoDebit = Number(input[2]);
    let hours = Number(input[3]);

    let pipeOneLiters = pipeOneDebit * hours;
    let pipeTwoLiters = pipeTwoDebit * hours;
    let totalLiters = pipeOneLiters + pipeTwoLiters;
    let pipeOnePercentage = (pipeOneLiters / totalLiters) * 100;
    let pipeTwoPercentage = (pipeTwoLiters / totalLiters) * 100;
    let totalFillPercentage = (totalLiters / poolVolume) * 100;

    if (totalLiters <= poolVolume) {
        console.log(
            `The pool is ${totalFillPercentage.toFixed(
                2
            )}% full. Pipe 1: ${pipeOnePercentage.toFixed(
                2
            )}%. Pipe 2: ${pipeTwoPercentage.toFixed(2)}%.`
        );
    } else {
        console.log(
            `For ${hours} hours the pool overflows with ${
                totalLiters - poolVolume
            } liters.`
        );
    }
}

calculateWater(['1000', '100', '120', '3']);
calculateWater(['100', '100', '100', '2.5']);
