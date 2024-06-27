const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
    res.send('Hello World get');
});

homeRouter.post('/', (req, res) => {
    res.send('Hello World get post');
});

module.exports = homeRouter;
