const express = require('express')
// const { check } = require('express-validator');
const router = express.Router();
const nontcController = require('../controllers/nontcController')

router.post('/register',nontcController.register);
router.post('/ologin',nontcController.ologin)

module.exports = router;
