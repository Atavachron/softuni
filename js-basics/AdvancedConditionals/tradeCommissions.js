function calculateCommission(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commissonRate = 0;

    if (city === 'Sofia') {
        if (0 <= sales && sales <= 500) {
            commissonRate = 0.05;
        } else if (500 < sales && sales <= 1000) {
            commissonRate = 0.07;
        } else if (1000 < sales && sales <= 10000) {
            commissonRate = 0.08;
        } else {
            commissonRate = 0.12;
        }
    } else if (city === 'Plovdiv') {
        if (0 < sales && sales <= 500) {
            commissonRate = 0.055;
        } else if (500 < sales && sales <= 1000) {
            commissonRate = 0.08;
        } else if (1000 < sales && sales <= 10000) {
            commissonRate = 0.12;
        } else {
            commissonRate = 0.145;
        }
    } else if (city === 'Varna') {
        if (0 < sales && sales <= 500) {
            commissonRate = 0.045;
        } else if (500 < sales && sales <= 1000) {
            commissonRate = 0.075;
        } else if (1000 < sales && sales <= 10000) {
            commissonRate = 0.1;
        } else {
            commissonRate = 0.13;
        }
    }

    if (sales > 0 && commissonRate > 0) {
        console.log((sales * commissonRate).toFixed(2));
    } else {
        console.log('error');
    }
}

calculateCommission(['Sofia', '1500']);
calculateCommission(['Plovdiv', '499.99']);
calculateCommission(['Varna', '3874.50']);
calculateCommission(['Kaspichan', '-50']);
