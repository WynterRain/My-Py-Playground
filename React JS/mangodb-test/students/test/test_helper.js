const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/students_test", (useNewUrlParser: true));

mongoose.connection
    .once("open", () => console.log("We are connectie"))
    .on("error", (error) => (
        conosle.warn("An error occured!", error)
    ))