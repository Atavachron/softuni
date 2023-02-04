function printCertificate(grade, arr) {
    let formattedGrade = formatGrade(grade);
    let formattedname = mergeName(arr);

    let certificate = `
    ~~~-    @     -~~~
    ~- Certificate -~
    ~~-     @     -~~~
       ${formattedname}
       ${formattedGrade}`;

    return formattedGrade.includes('Fail')
        ? 'The student has failed'
        : certificate;

    function mergeName(arr) {
        return `${arr[0]} ${arr[1]}`;
    }

    function formatGrade(grade) {
        let result;
        if (grade < 3) {
            result = 'Fail';
        } else if (grade < 3.5) {
            result = 'Poor';
        } else if (grade < 4.5) {
            result = 'Good';
        } else if (grade < 5.5) {
            result = 'Very good';
        } else {
            result = 'Excellent';
        }

        let gradeValueText = grade < 3 ? 2 : grade.toFixed(2);

        return `${result} (${gradeValueText})`;
    }
}

console.log(printCertificate(2.99, ['John', 'Smith']));
