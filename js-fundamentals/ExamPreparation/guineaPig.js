function guineaPig(input) {
    let food = Number(input[0]) * 1000;
    let hay = Number(input[1]) * 1000;
    let cover = Number(input[2]) * 1000;
    let weight = Number(input[3]) * 1000;

    for (let i = 1; i <= 30; i++) {
        if (food <= 0 || hay <= 0 || cover <= 0) break;

        feedPet();

        if (i % 2 === 0) {
            giveHay();
        }

        if (i % 3 === 0) {
            giveCover();
        }
    }

    if (food <= 0 || hay <= 0 || cover <= 0) {
        return `Merry must go to the pet store!`;
    } else {
        return `Everything is fine! Puppy is happy! Food: ${(
            food / 1000
        ).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(
            cover / 1000
        ).toFixed(2)}.`;
    }

    function feedPet() {
        food -= 300;
    }

    function giveHay() {
        hay -= (food * 5) / 100;
    }

    function giveCover() {
        cover -= weight / 3;
    }
}

console.log(guineaPig(['10', '5', '5.2', '1']));
console.log(guineaPig(['1', '1.5', '3', '1.5']));
