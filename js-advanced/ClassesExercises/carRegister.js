function createCarRegister(input) {
    const register = {};

    for (let line of input) {
        let [brand, model, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (!register.hasOwnProperty(brand)) {
            register[brand] = {};
        }

        if (!register[brand].hasOwnProperty(model)) {
            register[brand][model] = 0;
        }

        register[brand][model] += producedCars;
    }

    for (let brand in register) {
        console.log(brand);
        for (let model in register[brand]) {
            console.log(`###${model} -> ${register[brand][model]}`);
        }
    }
}
