function calculateFansRatio(input) {
    let stadiumCapacity = Number(input[0]);
    let fansCount = Number(input[1]);

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 2; i <= fansCount + 1; i++) {
        let fan = input[i];

        switch (fan) {
            case 'A':
                sectorA++;
                break;
            case 'B':
                sectorB++;
                break;
            case 'V':
                sectorV++;
                break;
            case 'G':
                sectorG++;
                break;
        }
    }

    let sectorARatio = (sectorA / fansCount) * 100;
    let sectorBRatio = (sectorB / fansCount) * 100;
    let sectorVRatio = (sectorV / fansCount) * 100;
    let sectorGRatio = (sectorG / fansCount) * 100;
    let allFansRatio = (fansCount / stadiumCapacity) * 100;

    console.log(`${sectorARatio.toFixed(2)}%`);
    console.log(`${sectorBRatio.toFixed(2)}%`);
    console.log(`${sectorVRatio.toFixed(2)}%`);
    console.log(`${sectorGRatio.toFixed(2)}%`);
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
