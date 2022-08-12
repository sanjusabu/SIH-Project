const Jobs = require('../models/JobModel')
const HttpError = require('../models/http-error');
const express = require('express')

const getprevjobs = async(req,res,next)=>
{
    const getJobs = await Jobs.find({})
    console.log(getJobs) 
}
const prevjobs = async(req,res,next)=>
{
    console.log(req.body)
    const { compname,duration,salary,position,location } = req.body
    let previousJobs
        previousJobs = await Jobs.findOne({compname:compname})
        if(previousJobs) {
            const error = new HttpError(
                'Job exists already, please add different job',
                422
              );
              return next(error);
        }

        const addJob = new Jobs({
            compname:  compname,
            duration:  duration,
             position: position,
            salary:    salary,
            location:  location
        }) 
        try{
         await addJob.save()
        }
        catch(err){
            console.log("saving error")
            const error = new HttpError(
              'Adding Job failed, please try again later.',
              500
            );
            return next(error);
        }
        // console.log(newJob)
        res.json({job:addJob})
}

exports.prevjobs = prevjobs
exports.getprevjobs = getprevjobs