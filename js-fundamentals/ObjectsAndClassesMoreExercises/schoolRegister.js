function arrangeStudents(input) {
    let studentList = [];

    for (let line of input) {
        let studentData = line.split(', ');
        let name = studentData[0].split(': ')[1];
        let grade = Number(studentData[1].split(': ')[1]) + 1;
        let score = Number(studentData[2].split(': ')[1]);

        let student = {
            name,
            grade,
            score,
        };

        studentList.push(student);
    }

    let passingStudentsList = studentList
        .filter(student => student.score >= 3)
        .sort((a, b) => a.grade - b.grade);

    let groupedStudents = {};

    for (let student of passingStudentsList) {
        if (!(student.grade in groupedStudents)) {
            groupedStudents[student.grade] = {
                students: [],
                totalScore: 0,
                count: 0,
            };
        }

        groupedStudents[student.grade].students.push(student.name);
        groupedStudents[student.grade].totalScore += student.score;
        groupedStudents[student.grade].count++;
    }

    for (let grade in groupedStudents) {
        let studentsInGrade = groupedStudents[grade].students;
        let totalScore = groupedStudents[grade].totalScore;
        let count = groupedStudents[grade].count;
        let averageScore = (totalScore / count).toFixed(2);

        console.log(`${grade} Grade`);
        console.log(`List of students: ${studentsInGrade.join(', ')}`);
        console.log(`Average annual score from last year: ${averageScore}`);
        console.log();
    }
}

arrangeStudents([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00',
]);
