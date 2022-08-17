const express = require('express')
// const { check } = require('express-validator');
const router = express.Router();

const usersController =  require('../controllers/userController')

router.post('/signup',usersController.signup);
router.post('/login',usersController.login)
//   router.post('/login', usersController.login);
router.post('/search',usersController.search)
router.post('/details',usersController.details)
  module.exports = router;