const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

//Bodyparser Middleware
app.use(express.json());

//DB config
const db = config.get('mongoURI');

//connect to mongo
// the options are needed for the MongoDB atlas and may not be needed for a local mongodb instance
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

//use Routes
app.use('/api/characters',require('./routes/api/characters'));

app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));