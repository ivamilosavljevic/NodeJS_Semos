require('dotenv').config();
const http = require('http');
const app = require('./app');
const connectToDb = require('./config/mongodb');

const server = http.createServer(app);
const PORT = process.env.PORT;


connectToDb()
.then(() => {
    server.listen(PORT, () => {
        console.log("Server running! Database connected! ");
    });
})
.catch((err) => {
    console.log(err);
});

