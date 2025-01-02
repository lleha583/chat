const express = require('express');
const cors = require('cors')

const { createServer } = require("http");
const { Server } = require("socket.io");

const user = require('./routes/user');

const app = express();

app.use(cors())
app.use("/user", user)

const PORT = process.env.PORT || 3000

const httpServer = createServer(app)
const io = new Server(httpServer, {
        cors: {
                origin: "*",
                method: ["GET", "POST"]
        }
 });


httpServer.listen(PORT, () => console.log(`http://localhost:${PORT}`))

