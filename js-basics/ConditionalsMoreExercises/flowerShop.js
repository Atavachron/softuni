function checkIfSufficientIncome(input) {
    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cacti = Number(input[3]);
    let giftPrice = Number(input[4]);

    let magnoliasTotal = magnolias * 3.25;
    let hyacinthsTotal = hyacinths * 4;
    let rosesTotal = roses * 3.5;
    let cactiTotal = cacti * 8;

    let totalIncome = magnoliasTotal + hyacinthsTotal + rosesTotal + cactiTotal;
    let incomeAfterTax = totalIncome * 0.95;

    let diff = Math.abs(incomeAfterTax - giftPrice);

    if (incomeAfterTax >= giftPrice) {
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }
}

checkIfSufficientIncome(['2', '3', '5', '1', '50']);
checkIfSufficientIncome(['15', '7', '5', '10', '100']);
