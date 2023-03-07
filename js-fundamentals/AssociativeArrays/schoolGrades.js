function storeSchoolGrades(input) {
    let schoolGrades = {};

    for (let el of input) {
        let tokens = el.split(' ');
        let name = tokens[0];
        let grades = tokens.slice(1).map(Number);

        if (schoolGrades.hasOwnProperty(name)) {
            schoolGrades[name] = schoolGrades[name].concat(grades);
        } else {
            schoolGrades[name] = grades;
        }
    }

    let output = Object.keys(schoolGrades)
        .sort((a, b) => a.localeCompare(b))
        .map(name => {
            let currentStudentGrades = schoolGrades[name];
            let averageStudentGrade =
                currentStudentGrades.reduce((acc, val) => acc + val, 0) /
                currentStudentGrades.length;
            return `${name}: ${averageStudentGrade.toFixed(2)}`;
        });
    console.log(output.join('\n'));
}

storeSchoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
storeSchoolGrades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3',
]);
