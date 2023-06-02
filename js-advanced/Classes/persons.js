function solve() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let a = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let b = new Person('SoftUni');
    let c = new Person('Stephan', 'Johnson', 25);
    let d = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

    return [a, b, c, d];
}
