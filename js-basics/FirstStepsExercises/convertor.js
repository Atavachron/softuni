//Convert USD to BGN
//The input is in USD. The exchange rate is 1 USD = 1.79549 BGN

function convert(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;

    console.log(bgn);
}

convert(['22']);
