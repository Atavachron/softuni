//Calculate vegetable shop income in euro. Sales are in leva.

function calculateIncome(input) {
    let vegetablePrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let vegetablesWeight = Number(input[2]);
    let fruitsWeight = Number(input[3]);

    let incomeInLeva =
        vegetablesWeight * vegetablePrice + fruitsWeight * fruitPrice;
    let incomeInEuro = incomeInLeva / 1.94;

    console.log(incomeInEuro.toFixed(2));
}

calculateIncome(['0.194', '19.4', '10', '10']);
