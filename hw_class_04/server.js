require('dotenv').config();
const http = require('http');
const app = require('./app');


const PORT=process.env.PORT;  //so process pristapuvavme do ovie podatoci
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log("Server started running!");
});