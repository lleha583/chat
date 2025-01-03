const express = require('express');
const connectToDb = require('./config/db')
const cors = require('cors');
require('dotenv').config()

const user = require('./routes/user');
const authorisation = require('./routes/Authorisation');

const app = express();

connectToDb()

app.use(cors())
app.use(express.json())

app.use("/user", user)
app.use("/auth", authorisation)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

