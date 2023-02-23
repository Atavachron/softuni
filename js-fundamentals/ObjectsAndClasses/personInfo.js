function createObject(name, surname, age) {
    let obj = {
        firstName: name,
        lastName: surname,
        age: Number(age),
    };

    return obj;
}

console.log(createObject('Peter', 'Pan', '20'));
