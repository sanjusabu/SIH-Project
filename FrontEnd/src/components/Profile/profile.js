import React, { useState } from "react";
// import userImg from "./userProfile.png";
import "./Profile.css";
import FormInput from "./FormInput";
import SkillPanel from "./SkillPanel";
// import UploadAndDisplayImage from "./UploadAndDisplayImage";
import Pastjobs from "../LandingPage/Pastjobs";
import NavBar from "../NavBar/NavBar";

export default function Profile(props) {
  const showForm = () => {
    console.log(displayForm);
    setStyle("block");
  };

  const saveChanges = () => {
    console.log(displayForm);
    setStyle("none");
  };

  const loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
    console.log(image.src);
  };

  const [displayForm, setStyle] = useState("none");

  return (
    <>
      <NavBar />
      <div id="profile">
        <div className="basic-info">
          <div className="profile-image">
            <p>
              <input
                type="file"
                accept="image/*"
                name="image"
                id="file"
                onChange={loadFile}
                style={{ display: "none" }}
              />
            </p>
            <p>
              <label htmlFor="file" style={{ cursor: "pointer" }}>
                Upload Image
              </label>
            </p>
            <p>
              {/* <img id="output" width="100%" style={{borderRadius:"100%" ,width:"60%", objectFit:"cover"}} /> */}
              <img
                id="output"
                width="100%"
                style={{
                  objectFit: "cover",
                  zIndex: "1",
                }}
              />
            </p>
          </div>
          <div className="details">
            <ul className="detailsul-1">
              <li>Name</li>
              <li>Email</li>
            </ul>
            <ul className="detailsul-2">
              <li>Gender</li>
              <li>Date Of Birth</li>
              <button className="btn btn-primary detailedit" onClick={showForm}>
                Edit
              </button>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="form-container"
        style={{ display: `${displayForm}`, position: "absolute" }}
      >
        <form>
          <div className="row">
            <h4>Edit Details</h4>
            <div className="input-group input-group-icon">
              <input
                type="text"
                placeholder="Full Name"
                id="username"
                name="fullName"
              />
              <div className="input-icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
            <div className="input-group input-group-icon">
              <label htmlFor="locationTextField"></label>
              <input
                id="locationTextField"
                type="text"
                size="50"
                placeholder="Current Location"
                name="location"
              />
              {/* <input type="email" placeholder="Email Adress"/> */}

              <div className="input-icon">
                <i className="fa fa-envelope"></i>
              </div>
            </div>
            <div className="input-group input-group-icon">
              <input type="number" placeholder="Phone Number" name="phNo" />
              <div className="input-icon">
                <i className="fa fa-key"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-half">
              <h4>Date of Birth</h4>
              <div className="input-group">
                <div className="col-third">
                  <input type="text" placeholder="DD" name="day" />
                </div>
                <div className="col-third">
                  <input type="text" placeholder="MM" name="month" />
                </div>
                <div className="col-third">
                  <input type="text" placeholder="YYYY" name="year" />
                </div>
              </div>
            </div>
            <div className="col-half">
              <h4>Gender</h4>
              <div className="input-group">
                <input
                  id="gender-male"
                  type="radio"
                  name="gender"
                  value="male"
                />
                <label htmlFor="gender-male">Male</label>
                <input
                  id="gender-female"
                  type="radio"
                  name="gender"
                  value="female"
                />
                <label htmlFor="gender-female">Female</label>
              </div>
            </div>
          </div>

          <button className="submit-btn" onClick={saveChanges}>
            Save Changes
          </button>
          {/* <input type="submit">Save Changes</input> */}
        </form>
      </div>

      <div className="SkillPanel">
        <SkillPanel />
      </div>

      <div className="pastJobs">
        <Pastjobs />
      </div>

      {/* <FormInput /> */}
    </>
  );
}
