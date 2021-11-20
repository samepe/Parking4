const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/mean-parking", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(db => console.log("db is connected"))
    .catch(err => console.error(err));
