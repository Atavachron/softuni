function printTowns(towns) {
    let list = [];
    for (let town of towns) {
        let townArr = town.split(' | ');
        let townName = townArr[0];
        let latitude = Number(townArr[1]);
        let longitude = Number(townArr[2]);

        let obj = {
            town: townName,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2),
        };

        list.push(obj);
    }

    for (let obj of list) {
        console.log(obj);
    }
}

printTowns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625',
]);
