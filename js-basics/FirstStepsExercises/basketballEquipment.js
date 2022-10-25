function calculateEquipmentCost(input) {
    let annualFee = Number(input[0]);

    let sneakers = annualFee * 0.6;
    let jersey = sneakers * 0.8;
    let ball = jersey / 4;
    let accessories = ball / 5;

    let totalCost = annualFee + sneakers + jersey + ball + accessories;

    console.log(totalCost);
}

calculateEquipmentCost(['365']);
