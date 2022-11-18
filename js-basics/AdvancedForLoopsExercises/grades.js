function calculateGrades(input) {
    let studentCount = Number(input[0]);
    let totalGrade = 0;
    let topStudentCount = 0;
    let goodStudentCount = 0;
    let averageStudentCount = 0;
    let failStudentCount = 0;

    for (let i = 1; i <= studentCount; i++) {
        let currentGrade = Number(input[i]);

        totalGrade += currentGrade;

        if (currentGrade < 3) {
            failStudentCount++;
        } else if (currentGrade < 4) {
            averageStudentCount++;
        } else if (currentGrade < 5) {
            goodStudentCount++;
        } else {
            topStudentCount++;
        }
    }

    let topStudentPct = (topStudentCount / studentCount) * 100;
    let goodStudentPct = (goodStudentCount / studentCount) * 100;
    let averageStudentPct = (averageStudentCount / studentCount) * 100;
    let failStudentPct = (failStudentCount / studentCount) * 100;

    let averageGrade = totalGrade / studentCount;

    console.log(`Top students: ${topStudentPct.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${goodStudentPct.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${averageStudentPct.toFixed(2)}%`);
    console.log(`Fail: ${failStudentPct.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}

calculateGrades([
    '10',
    '3.00',
    '2.99',
    '5.68',
    '3.01',
    '4',
    '4',
    '6.00',
    '4.50',
    '2.44',
    '5',
]);
