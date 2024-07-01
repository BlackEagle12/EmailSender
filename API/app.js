const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())

const loginRoute = require('./Routes/login.routes');
const signUpRoute = require('./Routes/signup.routes');
const sendMailRoute = require('./Routes/sendMail.routes');

app.use('/login', loginRoute);
app.use('/signup', signUpRoute);
app.use('/sendmail', sendMailRoute);

mongoose.connect(
    'mongodb+srv://emailsender.sy9pplp.mongodb.net/',
    {
        dbName: 'EmailApplication',
        user: 'vicky',
        pass: 'emailsendeR'
    }
)
.then(() => {
    console.log("DB Connected")
})

app.use((req, res, next) => {
    const error = new Error("NOT FOUND");
    error.status = 404
    next(error);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        Error : {
            status : err.status || 500,
            message : err.message || "Internal server error..."
        }
    })
})

app.listen(3000, () => {
 console.log("Server running on port 3000");
});