const Skills = require("../models/SkillModel");
const HttpError = require("../models/http-error");

const addskill = async (req, res, next) => {
  const { userid, skills } = req.body;

  // let userSkills;
  // userSkills = await Skills.findOne({ userid: userid });
  // if (userSkills) {
  //   const newSkill = {};
  //   if (skills) {
  //     newSkill.skills = skills;
  //   }
  //   try {
  //     let skill = await Skills.findByIdAndUpdate(
  //       userSkills.userid,
  //       { $set: newSkill },
  //       { new: true }
  //     );
  //     console.log($set);
  //     res.json({ skill });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const addnewskill = new Skills({
    userid: userid,
    skills: skills,
  });

  try {
    try {
      await addnewskill.save();
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(addnewskill);
    const error = new HttpError(
      "Adding Skill failed, please try again later.",
      500
    );
    return next(error);
  }
  // console.log(newJob)
  res.json({ skill: addnewskill });
};

exports.addskill = addskill;
