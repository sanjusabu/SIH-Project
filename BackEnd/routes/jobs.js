const express = require("express");
// const { check } = require('express-validator');
const router = express.Router();

const jobController = require("../controllers/jobController");
const employerController = require("../controllers/employerController");

router.post("/addprevjobs", jobController.prevjobs);
router.post("/addcurrjobs", jobController.addcurrjobs);
router.post("/getprevjobs", jobController.getprevjobs);
router.post("/getnewempjobs", employerController.getnewempjobs);
router.post("/addnewemployerjobs", employerController.addnewemployerjobs);
router.post("/getcurrjobs", jobController.getcurrjobs);
router.post("/getjobssalary", jobController.getjobssalary);
router.post("/getjobsname", jobController.getjobsname);
router.post("/loginsearch", jobController.loginsearch);
router.post("/getsalaray", jobController.getsalaray);
router.post("/search", jobController.search);
router.post("/recommendjobs", jobController.recommendjobs);
module.exports = router;
