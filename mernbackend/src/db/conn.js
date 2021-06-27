const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Register", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`Connection success....`);
}).catch((e) => {
    console.log(`no connection`);
})

