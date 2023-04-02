function solve(input) {
    let spell = input.shift();

    for (let element of input) {
        let [command, token1, token2] = element.split(' ');
        switch (command) {
            case 'Abjuration':
                spell = spell.toUpperCase();
                console.log(spell);
                break;
            case 'Necromancy':
                spell = spell.toLowerCase();
                console.log(spell);
                break;
            case 'Illusion':
                let i = Number(token1);
                let letter = token2;
                if (i < 0 || i >= spell.length) {
                    console.log('The spell was too weak.');
                } else {
                    spell = spell.slice(0, i) + letter + spell.slice(i + 1);
                    console.log('Done!');
                }
                break;
            case 'Divination':
                let firstSubstring = token1;
                let secondSubstring = token2;
                let substring = new RegExp(firstSubstring, 'gi');
                if (spell.match(substring)) {
                    spell = spell.replace(substring, secondSubstring);
                    console.log(spell);
                }
                break;
            case 'Alteration':
                let substr = token1;
                if (spell.includes(substr)) {
                    spell = spell.replace(substr, '');
                    console.log(spell);
                }
                break;
            case 'Abracadabra':
                return;
            default:
                console.log('The spell did not work!');
        }
    }
}

// solve(['A7ci0', 'Illusion 1 c', 'Illusion 4 o', 'Abjuration', 'Abracadabra']);

// solve(['TR1GG3R', 'Necromancy', 'Illusion 8 m', 'Illusion 9 n', 'Abracadabra']);

solve([
    'SwordMaster',
    'Target Target Target',
    'Abjuration',
    'Necromancy',
    'Alteration master',
    'Abracadabra',
]);
