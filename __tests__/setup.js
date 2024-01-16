
// This file is used to setup the database connection before running the tests ignore it when running tests
const mongoose = require('mongoose');

// beforeAll - Används för att köra kod innan alla testfall i testsviten körs.
    // beforeEach - Används för att köra kod innan varje testfall i testsviten körs.
    beforeAll(async () => {
        await mongoose.connect("mongodb://localhost:27017/test", { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
    });

    // afterEach - Används för att köra kod efter varje testfall i testsviten körs.
    // afterAll - Används för att köra kod efter alla testfall i testsviten körs.
    afterAll(async () => {
        await mongoose.connection.close();
    });
