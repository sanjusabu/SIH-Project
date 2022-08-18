const Jobs = require("../models/JobModel");
const HttpError = require("../models/http-error");
const express = require("express");
const fs = require('fs')
const Dataset = require("../JsonData/jobs.json")

const search = (req, res, next) => {
  // console.log("sanju")
  console.log(req.body)
  const toSearch = req.body.search
  console.log(typeof toSearch)
  const place = req.body.place

  const response = Dataset.filter(data=>
   (data.city === place && data.job_title.includes(toSearch)))
    const details = response.map((data)=>
    {
      return({
      company:data.company_name,
      title:data.job_title,
      fromSalary:data.inferred_salary_from,
      toSalary:data.inferred_salary_to,
      city: data.city,
      category: data.category
      })
    })
  console.log(details)
    res.json(details)
  // const targetURL = `https://api.adzuna.com/v1/api/jobs/in/search/1?&results_per_page=20&content-type=application/json&app_id=da3b4b1b&app_key=36a0c2ed8bb2374466527f58761a7f3d&what=${toSearch}&where=${place}`;

  // axios.get(targetURL)
  //   .then(response => {
      // res.writeHead(200, headers);
      // console.log(response.data);
      // const sendResponse = response.data.results
      // res.json({sendResponse})
      // console.log(sendResponse)
      // const requiredinfo = sendResponse.map((i) => {
      //   return ({
      //     id: i.id,
      //     title: i.title,
      //     company: i.company.display_name,
      //     description: i.description,
      //     location: i.location.display_name,
      //     url:i.redirect_url
      //   })
      // })
      // res.json({ requiredinfo })

    // }).catch(response => {
      // res.writeHead(500, headers);
    //   console.log('error');
    // });
}

const getprevjobs = async (req, res, next) => {
  const getJobs = await Jobs.find({});
  console.log(getJobs);

  res.json({ jobs: getJobs });
};
const prevjobs = async (req, res, next) => {
  console.log(req.body);
  const { compname, duration, salary, position, location } = req.body;
  let previousJobs;
  previousJobs = await Jobs.findOne({ compname: compname });
  if (previousJobs) {
    const error = new HttpError(
      "Job exists already, please add different job",
      422
    );
    return next(error);
  }

  const addJob = new Jobs({
    compname: compname,
    duration: duration,
    position: position,
    salary: salary,
    location: location,
  });
  try {
    await addJob.save();
  } catch (err) {
    console.log("saving error");
    const error = new HttpError(
      "Adding Job failed, please try again later.",
      500
    );
    return next(error);
  }
  // console.log(newJob)
  res.json({ job: addJob });
};

exports.prevjobs = prevjobs;
exports.getprevjobs = getprevjobs;
exports.search = search
