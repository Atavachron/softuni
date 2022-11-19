function calculateFansRatio(input) {
    let stadiumCapacity = Number(input[0]);
    let fansCount = Number(input[1]);

    let sectorArr = new Array(4).fill(0);

    for (let i = 2; i <= fansCount + 1; i++) {
        let fan = input[i];

        switch (fan) {
            case 'A':
                sectorArr[0]++;
                break;
            case 'B':
                sectorArr[1]++;
                break;
            case 'V':
                sectorArr[2]++;
                break;
            case 'G':
                sectorArr[3]++;
                break;
        }
    }

    let sectorRatiosArr = sectorArr.map(sector => (sector / fansCount) * 100);
    let allFansRatio = (fansCount / stadiumCapacity) * 100;

    sectorRatiosArr.forEach(sector => console.log(`${sector.toFixed(2)}%`));

    console.log(`${allFansRatio.toFixed(2)}%`);
}

calculateFansRatio([
    '76',
    '10',
    'A',
    'V',
    'V',
    'V',
    'G',
    'B',
    'A',
    'V',
    'B',
    'B',
]);
