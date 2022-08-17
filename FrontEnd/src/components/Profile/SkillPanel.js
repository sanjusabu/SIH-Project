import React, { useState } from "react";
// import "./SkillPanel.css";
import classes from "./SkillPanel.module.css";
import { useRequest } from "../../hooks/request-hook";
import { useNavigate } from "react-router-dom";

var arr = [
  "css",
  "html",
  "JavaScriptsuckzzzz",
  "react",
  "cpp",
  "java",
  "python",
  "javascript",
];

function SkillPanel() {
  const [skills, setSkill] = useState(arr);
  const tempFunc = (skill) => {
    setSkill(skills.filter((skills) => skills != skill));
  };

  const addTag = () => {
    console.log(EnteredSkill);
    arr.push(EnteredSkill);
    console.log(arr);
    setEnteredSkill("");
  };
  const navigate = useNavigate();
  const uid = localStorage.getItem("userid");
  const [addskill, setAddskill] = useState(arr);
  const { sendRequest } = useRequest();

  const addSkill = (event) => {
    setEnteredSkill(event.target.value);
  };

  const [EnteredSkill, setEnteredSkill] = useState("");
  // const [displayInputField, setStyle] = useState("none");
  const submitSkills = async (e) => {
    e.preventDefault();
    const response = await sendRequest(
      "http://localhost:5002/skills/addskills",
      "POST",
      JSON.stringify({
        userid: uid,
        skills: addskill,
      }),
      {
        "Content-Type": "application/json",
      }
    );
    navigate("/profile");
    // console.log(response.skill.skills);
  };

  return (
    <div className={classes.bg}>
      <div className={classes.head}>
        <h1>Skills</h1>
      </div>

      <div className={classes.tagDiv}>
        <ul className={classes.sKillUL}>
          {skills.map((skill, index) => (
            <div>
              <li key={index}>
                {skill}
                <button
                  className={[classes.close, classes.skillBtn].join(" ")}
                  onClick={() => tempFunc(skill)}
                >
                  <i className="fa-solid  fa-circle-xmark"></i>
                </button>
              </li>
            </div>
          ))}
          <li>
            <div className={classes.inputField}>
              <input
                className={classes.skillInput}
                type="text"
                id="addSkill"
                name="addSkill"
                placeholder="add a skill"
                onChange={addSkill}
              />
            </div>
            <button
              className={[classes.close, classes.skillBtn].join(" ")}
              role="button"
            >
              <i className="fa-solid fa-2x fa-plus" onClick={addTag}></i>
            </button>
          </li>
          <button
            className="btn btn-primary saveskills mx-2"
            onClick={submitSkills}
          >
            Save Skills
          </button>
        </ul>
      </div>
    </div>
  );
}

export default SkillPanel;
