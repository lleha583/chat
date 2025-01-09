const express = require('express');
const cors = require('cors');
require('dotenv').config()

const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express();

app.use(cors())
app.use(express.json())

const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
})

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        io.emit(message)
    })
    
    socket.on('disconnect', () => {
        console.log('disconnected');
    })
})


const PORT = process.env.PORT || 3000

httpServer.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

