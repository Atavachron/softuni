function calculateUtilityBills(input) {
    let months = Number(input[0]);

    let totalBill = 0;
    let water = 0;
    let electricity = 0;
    let internet = 0;
    let others = 0;

    for (let i = 1; i <= months; i++) {
        let currentElectricityBill = Number(input[i]);
        let currentWaterBill = 20;
        let currentInternetBill = 15;
        let currentOthersBill = 0;

        electricity += currentElectricityBill;
        water += currentWaterBill;
        internet += currentInternetBill;
        currentOthersBill =
            (currentElectricityBill + currentWaterBill + currentInternetBill) *
            1.2;
        others += currentOthersBill;

        totalBill +=
            currentElectricityBill +
            currentWaterBill +
            currentInternetBill +
            currentOthersBill;
    }

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${(totalBill / months).toFixed(2)} lv`);
}

calculateUtilityBills(['5', '68.63', '89.25', '132.53', '93.53', '63.22']);
