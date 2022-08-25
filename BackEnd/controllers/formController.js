const jobScore = require("../models/formModel");
const HttpError = require("../models/http-error");

const addJobScore = async (req, res, next) => {
  const { userid, jobScore } = req.body;
    // console.log(skills)
    let exisitingScore
    exisitingScore = await jobScore.findOne({userid:userid})
    if(exisitingScore){
    try{
      const result = await jobScore.updateOne({userid:userid},{
        $set :{
          jobScore: jobScore
        }
      })
      console.log(result)
    }
    catch(err){
        console.log(err)
    }
    }

else{
  const exisitingScore = new jobScore({
    userid: userid,
    jobScore: jobScore,
  });

  try {
    try {
      await exisitingScore.save();
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(exisitingScore);
    const error = new HttpError(
      "Adding job score failed, please try again later.",
      500
    );
    return next(error);
  }
}
  const updatedJobScore = await jobScore.findOne({userid:userid})
  res.json({ jobScore: updatedJobScore });
};

const getJobScore = async(req,res,next)=>{
  const { userid} = req.body;
  // console.log(userid,'hjfbhejbhj')
  let exisitingScore
  exisitingScore = await jobScore.findOne({userid:userid}) 
  if(exisitingScore)
  {
  res.json(exisitingScore.jobScore)
  }
  else{
    res.json([])
  }
}

exports.addJobScore = addJobScore;
exports.getJobScore = getJobScore;