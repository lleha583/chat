const express = require("express");
const user = express.Router()

user.get('/', (req, res) => {
    res.json({ status:200, res: "hello" })
})


module.exports = user
