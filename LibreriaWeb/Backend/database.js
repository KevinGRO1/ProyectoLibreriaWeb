const mongoose = require('mongoose');

const URI = 'mongodb+srv://dominioDAD:zzsLwhr0R3232jiC@cluster0.sq12i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
    .then(db => console.log("BD CONECTADA"))
    .catch(err => console.log(err));

module.exports = mongoose;


//zzsLwhr0R3232jiC
///mongodb+srv://dominioDAD:<password>@cluster0.sq12i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority