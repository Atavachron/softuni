//This solution will overwrite two employees with the same name as it creates only one object

function createEmployeeList(input) {
    let obj = {};

    for (let name of input) {
        obj[name] = name.length;
    }

    for (let key of Object.keys(obj)) {
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
    }
}

createEmployeeList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal',
]);
