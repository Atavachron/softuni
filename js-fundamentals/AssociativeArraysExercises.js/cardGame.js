function cardGame(input) {
    let players = {};

    let cardPowerEnum = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
    };

    let cardTypeEnum = {
        S: 4,
        H: 3,
        D: 2,
        C: 1,
    };

    for (let line of input) {
        let [player, cards] = line.split(': ');

        if (!players.hasOwnProperty(player)) {
            players[player] = new Set();
        }

        let cardsArr = cards.split(', ');

        for (let card of cardsArr) {
            players[player].add(card);
        }
    }

    for (let player of Object.entries(players)) {
        let sum = 0;

        for (let card of Array.from(player[1])) {
            let cardData = card.split('');
            let cardType = cardData[cardData.length - 1];
            let cardPower = cardData.slice(0, cardData.length - 1).join('');

            sum += cardTypeEnum[cardType] * cardPowerEnum[cardPower];
        }

        console.log(`${player[0]}: ${sum}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD',
]);
