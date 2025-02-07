const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{ timestamps: true });

module.exports = Item = mongoose.model('user', UserSchema);