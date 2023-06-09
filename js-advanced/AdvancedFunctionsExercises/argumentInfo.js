function solve(...args) {
    let obj = {};

    for (let arg of args) {
        let type = typeof arg;

        if (!obj.hasOwnProperty(type)) {
            obj[type] = 0;
        }

        obj[type] = obj[type] + 1;
        console.log(`${type}: ${arg}`);
    }

    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    for (let entry of sorted) {
        console.log(`${entry[0]} = ${entry[1]}`);
    }
}

solve({ name: 'bob' }, 3.333, 9.999);
