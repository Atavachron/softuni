function solve(input) {
    let peopleCount = Number(input[0]);
    let entranceFee = Number(input[1]);
    let sunbedFee = Number(input[2]);
    let umbrellaFee = Number(input[3]);

    let sunbeds = Math.ceil(peopleCount * 0.75);
    let umbrellas = Math.ceil(peopleCount / 2);

    let totalEntranceFee = peopleCount * entranceFee;
    let totalUmbrellaFee = umbrellas * umbrellaFee;
    let totalSunbedFee = sunbeds * sunbedFee;

    let totalFee = totalEntranceFee + totalUmbrellaFee + totalSunbedFee;

    console.log(`${totalFee.toFixed(2)} lv.`);
}

solve(['21', '5.5', '4.4', '6.2']);
solve(['50', '6', '8', '4']);
