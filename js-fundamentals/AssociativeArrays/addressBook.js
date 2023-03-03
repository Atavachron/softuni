function sortAddressBook(input) {
    let addressBook = {};

    input.forEach(el => {
        let [name, address] = el.split(':');
        addressBook[name] = address;
    });

    let sortedAddressBook = Object.entries(addressBook).sort(([keyA], [keyB]) =>
        keyA.localeCompare(keyB)
    );

    for (let [name, address] of sortedAddressBook) {
        console.log(`${name} -> ${address}`);
    }
}

sortAddressBook([
    'Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd',
]);

sortAddressBook([
    'Bob:Huxley Rd',

    'John:Milwaukee Crossing',

    'Peter:Fordem Ave',

    'Bob:Redwing Ave',

    'George:Mesta Crossing',

    'Ted:Gateway Way',

    'Bill:Gateway Way',

    'John:Grover Rd',

    'Peter:Huxley Rd',

    'Jeff:Gateway Way',

    'Jeff:Huxley Rd',
]);
