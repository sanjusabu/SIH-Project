const express = require('express')
// const { check } = require('express-validator');
const router = express.Router();

const jobController = require('../controllers/jobController')

router.post('/addprevjobs',jobController.prevjobs)
router.get('/addprevjobs',jobController.getprevjobs)
router.post('/search',jobController.search)
module.exports = router