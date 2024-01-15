var mongoose = require('mongoose');
const localDB =  process.env.MONGODB_URI || "mongodb://localhost:27017/library";
const atlasDB = "mongodb+srv://vercel-admin-user:vB5bFkVSaZ8pk1KP@cluster0.cxnyj16.mongodb.net/library?retryWrites=true&w=majority"

async function connectToDB() {
    let url = atlasDB
    if(process.env.NODE_ENV === 'development') {
        url = localDB
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