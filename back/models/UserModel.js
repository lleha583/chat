const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: String,
    password: String,
    email: String, 
    age: Number,
    date: new Date(),
    friends: [],
    messages: []
})

const UserModel = mongoose.Model("User", User)

module.exports = UserModel