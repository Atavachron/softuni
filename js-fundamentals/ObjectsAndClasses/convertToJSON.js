function convertToJSON(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor,
    };

    let JSONObj = JSON.stringify(obj);
    console.log(JSONObj);
}

convertToJSON('George', 'Jones', 'Brown');
