function createEmployeeList(data) {
    //Create an array to store all the employee objects. Thus they will not be overwritten if the name is the same
    let list = [];

    for (let name of data) {
        let newObj = {
            name,
            personalNum: name.length,
        };

        list.push(newObj);
    }

    for (let obj of list) {
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNum}`);
    }
}

createEmployeeList([
    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal',
]);
