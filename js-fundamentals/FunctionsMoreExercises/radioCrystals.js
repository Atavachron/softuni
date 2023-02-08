function processCrystal(input) {
    let targetThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let currentThickness = input[i];

        console.log(`Processing chunk ${currentThickness} microns`);

        let cuts = 0;
        let laps = 0;
        let grinds = 0;
        let etches = 0;

        while (currentThickness !== targetThickness) {
            while (currentThickness / 4 >= targetThickness) {
                currentThickness = cut(currentThickness);
                cuts++;
            }

            if (cuts > 0) {
                console.log(`Cut x${cuts}`);
                console.log(`Transporting and washing`);
                currentThickness = transportAndWash(currentThickness);
            }

            while (currentThickness * 0.8 >= targetThickness) {
                currentThickness = lap(currentThickness);
                laps++;
            }

            if (laps > 0) {
                console.log(`Lap x${laps}`);
                console.log(`Transporting and washing`);
                currentThickness = transportAndWash(currentThickness);
            }

            while (currentThickness - 20 >= targetThickness) {
                currentThickness = grind(currentThickness);
                grinds++;
            }

            if (grinds > 0) {
                console.log(`Grind x${grinds}`);
                console.log(`Transporting and washing`);
                currentThickness = transportAndWash(currentThickness);
            }

            while (currentThickness - 2 >= targetThickness - 1) {
                currentThickness = etch(currentThickness);
                etches++;
            }

            if (etches > 0) {
                console.log(`Etch x${etches}`);
                console.log(`Transporting and washing`);
                currentThickness = transportAndWash(currentThickness);
            }

            if (currentThickness < targetThickness) {
                currentThickness = xray(currentThickness);
                console.log(`X-ray x1`);
            }
        }

        console.log(`Finished crystal ${targetThickness} microns`);
    }

    function cut(crystal) {
        return crystal / 4;
    }

    function lap(crystal) {
        return crystal * 0.8;
    }

    function grind(crystal) {
        return crystal - 20;
    }

    function etch(crystal) {
        return crystal - 2;
    }

    function xray(crystal) {
        return crystal + 1;
    }

    function transportAndWash(crystal) {
        return Math.floor(crystal);
    }
}

processCrystal([1375, 5000]);
processCrystal([1000, 4000, 8100]);
