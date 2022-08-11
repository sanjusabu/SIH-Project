import React, { useState } from "react";
import "./SkillPanel.css";

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

  const [displayInputField, setStyle] = useState("none");

  return (
    <div className="bg">
      <div className="head">
        <h1>Skills</h1>
      </div>

      <div className="tagDiv">
        <ul>
          {skills.map((skill, index) => (
            <div>
              <li key={index}>
                {skill}
                <button className="close" onClick={() => tempFunc(skill)}>
                  <i class="fa-solid  fa-circle-xmark"></i>
                </button>
              </li>
            </div>
          ))}
          <li>
            <div className="inputField">
              <input
                type="text"
                id="addSkill"
                name="addSkill"
                placeHolder="add a skill"
              />
            </div>
            <button className="close" role="button">
              <i className="fa-solid fa-2x fa-plus" onClick={addTag}></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SkillPanel;
