const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json())

mongoose.connect(
    'mongodb+srv://emailsender.sy9pplp.mongodb.net/',
    {
        dbName: 'sample_mflix',
        user: 'vicky',
        pass: 'emailsendeR'
    }
)
.then(() => {
    console.log("DB Connected")
})

const productRouter = require('./Routes/Products.route');
const homeRouter = require('./Routes/home.route');

app.use('/', homeRouter);
app.use('/product', productRouter);


app.use((req, res, next) => {
    const error = new Error("NOT FOUND");
    error.status = 404
    next(error);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error : {
            status : err.status || 500,
            message : err.message || "Internal servar error"
        }
    })
})


app.listen(3000, () => {
    console.log("Server started");
})