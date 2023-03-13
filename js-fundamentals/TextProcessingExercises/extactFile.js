function extractFile(path) {
    let extracted = path.split('\\');
    let file = extracted[extracted.length - 1].split('.');
    let fileExtension = file.pop();
    let fileName = file.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
