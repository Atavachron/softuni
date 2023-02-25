function createHeroInventory(input) {
    //Create empty array to store the hero objects
    let heroes = [];

    //Iterate over each element of the input
    for (let el of input) {
        //Use destructuring to get the name, level and items from each input entry
        let [name, level, items] = el.split(' / ');

        //Create a her object
        let hero = { name, level, items };

        //Push the hero object to the array
        heroes.push(hero);
    }

    heroes
        .sort((a, b) => a.level - b.level) //Sort the hero objects, based on their level
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
