const express = require('express');
const cors = require('cors')
require('dotenv').config

const app = express();

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
        res.send('Heerrtyllo')
})

app.get('/user', (req, res) => {
        res.json({status: 200, res: 'hello dayn'})
})

app.listen(PORT, () => console.log(`http://localhost:3000`))

