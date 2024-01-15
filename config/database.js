var mongoose = require('mongoose');
const localDB =  (db = "db0") => `mongodb://localhost/${db}`;
const atlasDB = (db = "db0") => `mongodb+srv://jonatanvahlberg:123123abcabcadmin@node30.hdzx1ml.mongodb.net/${db}?retryWrites=true&w=majority;`;

async function connectToDB(db = "db0") {
    let url = atlasDB(db);
    if(process.env.NODE_ENV === 'development') {
        url = localDB(db);
    }
    console.log("url: ", url, process.env.NODE_ENV);
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', function () {
        console.log("DB connected!");
    });
}

module.exports = connectToDB;