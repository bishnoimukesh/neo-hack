const mongoose = require('mongoose');

const URL = 'mongodb+srv://bishnoimukesh:Mongo%40029@cluster0.purp7.mongodb.net/resume-builder'
mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});

const connection = mongoose.connection;

connection.on('connected', () => {  
    console.log('connected to database') }
);

connection.on('error', (err) => {
    console.log('error connecting to database', err)
});