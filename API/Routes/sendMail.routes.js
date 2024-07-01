const express = require('express');
const sendMailService = require('../Services/sendMail.service');
const router = express.Router();

router.post('/', sendMailService);

module.exports = router;