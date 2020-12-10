const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Character Schema
const CharacterSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    home_location: {
        type: String,
    }
},{ timestamps: true });

module.exports = Item = mongoose.model('character', CharacterSchema);