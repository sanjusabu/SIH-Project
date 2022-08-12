import React, { useState } from "react";
// import "./SkillPanel.css";
import classes from './SkillPanel.module.css';

var arr = [
  "css",
  "html",
  "JavaScriptsuckzzzz",
  "react",
  "cpp",
  "java",
  "python",
];

function SkillPanel() {
  const [skills, setSkill] = useState(arr);
  const tempFunc = (skill) => {
    setSkill(skills.filter((skills) => skills != skill));
  };

  const addTag = () => {
    console.log("hello");
  };

  // const [displayInputField, setStyle] = useState("none");

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
                <button className={[classes.close, classes.skillBtn].join(' ')}  onClick={() => tempFunc(skill)}>
                  <i class="fa-solid  fa-circle-xmark" ></i>
                </button>
              </li>
            </div>
          ))}
          <li>
            <div className={classes.inputField}>
              <input
                type="text"
                id="addSkill"
                name="addSkill"
                placeholder="add a skill"
              />
            </div>
          <button className={[classes.close, classes.skillBtn].join(' ')} role="button">
              <i className="fa-solid fa-2x fa-plus" onClick={addTag}></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SkillPanel;
