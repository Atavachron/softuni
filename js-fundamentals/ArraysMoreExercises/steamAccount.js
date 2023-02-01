function printSteamAccount(arr) {
    let account = arr[0];
    let accountArr = account.split(' ');

    let index = 1;
    let command = arr[index];
    index++;

    while (command !== 'Play!') {
        let commandsArr = command.split(' ');
        let currentCommand = commandsArr[0];
        let currentGame = commandsArr[1];

        if (currentCommand === 'Install') {
            if (!accountArr.includes(currentGame)) {
                accountArr.push(currentGame);
            }
        } else if (currentCommand === 'Uninstall') {
            for (let i = 0; i < accountArr.length; i++) {
                if (accountArr[i] === currentGame) {
                    accountArr.splice(i, 1);
                    break;
                }
            }
        } else if (currentCommand === 'Update') {
            for (let i = 0; i < accountArr.length; i++) {
                if (accountArr[i] === currentGame) {
                    accountArr.splice(i, 1);
                    accountArr.push(currentGame);
                    break;
                }
            }
        } else if (currentCommand === 'Expansion') {
            for (let i = 0; i < accountArr.length; i++) {
                let expansionArr = currentGame.split('-');
                let expansionGame = expansionArr[0];
                let expansion = expansionArr[1];

                if (accountArr[i].includes(expansionGame)) {
                    accountArr.splice(
                        i + 1,
                        0,
                        `${accountArr[i]}:${expansion}`
                    );
                    break;
                }
            }
        }
        command = arr[index];
        index++;
    }
    console.log(accountArr.join(' '));
}

printSteamAccount([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!',
]);

printSteamAccount([
    'CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!',
]);
