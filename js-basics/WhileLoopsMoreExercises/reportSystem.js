function reportDonations(input) {
    let target = Number(input[0]);
    let donations = 0;

    let index = 1;
    let command = input[index];

    let cardDonations = 0;
    let cardTransactions = 0;
    let cashDonations = 0;
    let cashTransactions = 0;

    while (donations < target) {
        if (command === 'End') {
            console.log('Failed to collect required money for charity.');
            break;
        }

        let amount = Number(command);

        if (index % 2 !== 0) {
            if (amount > 100) {
                console.log(`Error in transaction!`);
            } else {
                console.log('Product sold!');
                donations += amount;
                cashDonations += amount;
                cashTransactions++;
            }
        } else {
            if (amount < 10) {
                console.log(`Error in transaction!`);
            } else {
                console.log('Product sold!');
                donations += amount;
                cardDonations += amount;
                cardTransactions++;
            }
        }

        index++;
        command = input[index];
    }

    if (donations >= target) {
        console.log(
            `Average CS: ${(cashDonations / cashTransactions).toFixed(2)}`
        );
        console.log(
            `Average CC: ${(cardDonations / cardTransactions).toFixed(2)}`
        );
    }
}

reportDonations(['500', '120', '8', '63', '256', '78', '317']);
reportDonations(['600', '86', '150', '98', '227', 'End']);
