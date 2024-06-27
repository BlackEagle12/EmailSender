const express = require('express');
const homeRouter = require('./routes/login');
const connectDB = require('./database/database');
const app = express();

app.use('/login', homeRouter)
connectDB()
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log("server is running on port: " + port);
    });
  })
  .catch((Error) => {
    console.log("MongoDb connection failed! ", Error);
  });
//   app.use((req, res, next) => {
//     console.log(`${req.method} request for ${req.url}`);
//     next();
//   });


const port = 3000;

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });