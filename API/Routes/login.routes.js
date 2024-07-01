const express = require('express');
const { AuthenticateUser } = require('../Services/login.service');
const router = express.Router()

router.post('/', AuthenticateUser);

module.exports = router;