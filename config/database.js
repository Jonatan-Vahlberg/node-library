var mongoose = require('mongoose');

async function connectToDB(db = "db0") {
    await mongoose.connect('mongodb://localhost/' + db, { useNewUrlParser: true, useUnifiedTopology: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', function () {
        console.log("DB connected!");
    });
}

module.exports = connectToDB;