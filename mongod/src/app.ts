import mongoose from "mongoose";

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/MovieApp')
}

const userAttributes = new mongoose.Schema({
    email: String
    // username: String,
    // fullname: String,
    // password: String
})


const User = mongoose.model('userAttributes', userAttributes)

