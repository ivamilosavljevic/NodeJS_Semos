//Create a separate file, promises.js that imports the fs/promises module and path module.
const fs = require('fs/promises');
const path = require('path');

pathToFile = path.join(__dirname, 'http.txt');
pathToWrittenFile = path.join(__dirname,'newFile.txt') 

//Create a fileWrite function that accepts two arguments, the path to the new file, and the contents.
const fileWriter = async(contentToBeWritten) => {
    await fs.writeFile(pathToWrittenFile, contentToBeWritten);
}

//Create a fileReader function that accepts one argument, the path of the file to be read.
const fileReader = async() => {
    const data = await fs.readFile(pathToFile);
    console.log(data.toString());
}

//Export both of the above functions.
module.exports = {
    fileWriter,
    fileReader
};



