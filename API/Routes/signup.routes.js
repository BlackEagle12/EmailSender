const express = require('express');
const { AddNewUser } = require('../Services/signup.service');
const router = express.Router()

router.post('/', AddNewUser);

module.exports = router;