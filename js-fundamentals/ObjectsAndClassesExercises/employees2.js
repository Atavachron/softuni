function createEmployeeList(employees) {
    class Employee {
        constructor(name) {
            this.name = name;
            this.personalNum = this.name.length;
        }
    }

    for (let employee of employees) {
        let newEmployee = new Employee(employee);

        console.log(
            `Name: ${newEmployee.name} -- Personal Number: ${newEmployee.personalNum}`
        );
    }
}

createEmployeeList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal',
]);
