const express = require("express");
// const { check } = require('express-validator');
const router = express.Router();

const jobController = require("../controllers/jobController");

router.post("/addprevjobs", jobController.prevjobs);
router.post("/addcurrjobs", jobController.addcurrjobs);
router.post("/getprevjobs", jobController.getprevjobs);
router.post("/getcurrjobs", jobController.getcurrjobs);
router.post("/getjobssalary", jobController.getjobssalary);
router.post("/getjobsname", jobController.getjobsname);
router.post("/loginsearch", jobController.loginsearch);
router.post("/search", jobController.search);
module.exports = router;
