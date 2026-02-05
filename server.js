const express  = require('express');
const mongoose = require('mongoose');

const app = express(); 
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/loginapi")
    .then(() => console.log("mongodb connected"))
    .catch(err => console.log(err));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});