const EmpJobs = require("../models/EmployerJobModel");
const HttpError = require("../models/http-error");

const getnewempjobs = async (req, res, next) => {
  const { userid } = req.body;
  const getjobs = await EmpJobs.find({ userid: userid });
  res.json(getjobs);
};

const addnewemployerjobs = async (req, res, next) => {
  const {
    company,
    jobtitle,
    education,
    experience,
    industry,
    joblocation_address,
    payrate,
    skills,
    vacancy,
    date,
    userid,
  } = req.body;
  console.log(req.body);
  const addnewempjob = new EmpJobs({
    company: company,
    jobtitle: jobtitle,
    industry: industry,
    education: education,
    experience: experience,
    joblocation_address: joblocation_address,
    skills: skills,
    vacancy: vacancy,
    payrate: payrate,
    date: date,
    userid: userid,
  });
  try {
    await addnewempjob.save();
  } catch (err) {
    console.log("saving error");
    const error = new HttpError(
      "Adding Job failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({ job: addnewempjob });
};

exports.addnewemployerjobs = addnewemployerjobs;
exports.getnewempjobs = getnewempjobs;
