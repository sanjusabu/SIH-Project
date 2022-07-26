const express = require('express')
const { check } = require('express-validator');
const router = express.Router;

router.post(
    '/signup',
    [
      check('name')
        .not()
        .isEmpty(),
      check('email')
        .normalizeEmail()
        .isEmail(),
      check('password').isLength({ min: 6 }),
      check('mobile').isLength({min: 10, max:10}).isNumeric()
    ],
    usersController.signup
  );
  
  router.post('/login', usersController.login);
  
  module.exports = router;