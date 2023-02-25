function createHeroInventory(input) {
    let heroes = [];

    for (let el of input) {
        let [name, level, items] = el.split(' / ');

        let hero = { name, level, items };

        heroes.push(hero);
    }

    heroes
        .sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.name}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.items}`);
        });
}

createHeroInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]);
