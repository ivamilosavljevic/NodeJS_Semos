const http = require('http');
const server = http.createServer();
//down here i import the fileReader&fileWriter
const fileOps = require('./promises');

//Create an http server running on the 8080 port.
server.listen(8080, () => {
    console.log("Server has started successfully!");
}); 


//here I execute them in the server.js file.
fileOps.fileWriter('Here I am writing the content to newFile.txt')
.then(() => {
    console.log("Wrote to file!")
})
.catch((error) => {
    console.log("ERROR")
});

console.log("\n");
fileOps.fileReader('http.txt');