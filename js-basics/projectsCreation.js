// Calculate how many hours an architect will need to complete a certain number of projects
// The input will have the architect name and the number of projects.
// An architect needs 3 hours to complete a project.

function calculateHours(input) {
    //Get architect name from the first element of the input array
    let architectName = input[0];
    //Get number of projects from the second element and convert to number
    let projects = Number(input[1]);

    //Calculate total hours needed by multiplying number of projects per 3 (hours per project)
    let totalHours = projects * 3;

    //Use string interpolation to log the name, total hours and number of projects
    console.log(
        `The architect ${architectName} will need ${totalHours} hours to complete ${projects} project/s.`
    );
}

calculateHours(['George', '4']);
