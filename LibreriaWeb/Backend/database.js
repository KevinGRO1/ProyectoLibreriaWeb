const mongoose = require('mongoose');

const URI = 'mongodb+srv://adminUser:8jvFKmgiHoT7wYXM@clusterlibreria.jwbp4.mongodb.net/test';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err));

module.exports = mongoose;