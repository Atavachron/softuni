function calculateDonations(input) {
    let juniorsCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let track = input[2];

    let juniorsFee = 0;
    let seniorsFee = 0;

    switch (track) {
        case 'trail':
            juniorsFee = 5.5;
            seniorsFee = 7;
            break;
        case 'cross-country':
            juniorsFee = 8;
            seniorsFee = 9.5;
            break;
        case 'downhill':
            juniorsFee = 12.25;
            seniorsFee = 13.75;
            break;
        case 'road':
            juniorsFee = 20;
            seniorsFee = 21.5;
            break;
    }

    let totalJuniorsFee = juniorsCount * juniorsFee;
    let totalSeniorsFee = seniorsCount * seniorsFee;
    let totalFee = totalJuniorsFee + totalSeniorsFee;

    if (juniorsCount + seniorsCount >= 50 && track === 'cross-country') {
        totalFee *= 0.75;
    }

    totalFee *= 0.95;

    console.log(totalFee.toFixed(2));
}

calculateDonations(['10', '20', 'trail']);
