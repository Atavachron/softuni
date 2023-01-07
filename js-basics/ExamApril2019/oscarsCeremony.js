function solve(input) {
    let rent = Number(input[0]);

    let statuettes = rent * 0.7;
    let catering = statuettes * 0.85;
    let sound = catering / 2;

    let total = rent + statuettes + catering + sound;

    console.log(total.toFixed(2));
}

solve(['3500']);
solve(['5555']);
