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

  

  const loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
    console.log(image.src);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredDetails = {
      name: EnteredName,
      location: EnteredLocation,
      phoneNo: EnteredPhoneNo,
      dob: new Date(EnteredDate),
    };
    console.log(enteredDetails);
  };

  const nameChange = (event) => {
    setEnteredName(event.target.value);
    // console.log(event.target.value)
  };
  const locationChange = (event) => {
    setEnteredLocation(event.target.value);
    // console.log(event.target.value)
  };
  const phonenoChange = (event) => {
    setEnteredPhoneNo(event.target.value);
    // console.log(event.target.value)
  };
  const dateChange = (event) => {
    setEnteredDate(event.target.value);
    // console.log(event.target.value)
  };
  // const monthChange = (event) =>{
  //   setEnteredMonth(event.target.value);
  //   // console.log(event.target.value)
  // }
  // const yearChange = (event) =>{
  //   setEnteredYear(event.target.value);
  //   // console.log(event.target.value)
  // }
  const gender = (event) => {
    setEnteredGender(event.target.value);
    console.log(event.target.value);
  };

  const saveChanges = () => {
    setFilledName(EnteredName)
    setFilledLocation(EnteredLocation)
    setFilledPhoneNo(EnteredPhoneNo)
    setFilledDate(EnteredDate)
    setFilledGender(EnteredGender)
    console.log(displayForm);
    setStyle("none");
  };

  const [displayForm, setStyle] = useState("none");
  const [EnteredName, setEnteredName] = useState("Name");
  const [FilledName, setFilledName] = useState("Name");
  const [EnteredLocation, setEnteredLocation] = useState("Location");
  const [FilledLocation, setFilledLocation] = useState("Location");
  const [EnteredPhoneNo, setEnteredPhoneNo] = useState("Phone");
  const [FilledPhoneNo, setFilledPhoneNo] = useState("Phone");
  const [EnteredDate, setEnteredDate] = useState("DOB");
  const [FilledDate, setFilledDate] = useState("DOB");
  // const [EnteredMonth, setEnteredMonth] = useState("");
  // const [EnteredYear, setEnteredYear] = useState("");
  const [EnteredGender, setEnteredGender] = useState("Gender");
  const [FilledGender, setFilledGender] = useState("Gender");

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
              <li>{FilledName}</li>
              <li>{FilledLocation}</li>
            </ul>
            <ul className="detailsul-2">
              <li>{FilledPhoneNo}</li>
              <li>{FilledDate}</li>
              <button className="btn btn-primary detailedit" onClick={showForm}>
                Edit
              </button>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="form-container container"
        style={{ display: `${displayForm}`, position: "relative" }}
      >
        <form onSubmit={submitHandler}>
          <div className="row container">
            <h4>Edit Details</h4>
            <div className=" input-group input-group-icon iconissue">
              <input
                type="text"
                placeholder="Full Name"
                // id="username"
                size="50"
                name="fullName"
                onChange={nameChange}
              />
              <div className="input-icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
            <div className="input-group input-group-icon iconissue">
              {/* <label htmlFor="locationTextField"></label> */}
              <input
                // id="locationTextField"
                type="text"
                size="50"
                placeholder="Current Location"
                name="location"
                onChange={locationChange}
              />
              {/* <input type="email" placeholder="Email Adress"/> */}

              <div className="input-icon">
                <i className="fa fa-envelope"></i>
              </div>
            </div>
            <div className="input-group input-group-icon">
              <input
                type="number"
                placeholder="Phone Number"
                size="50"
                name="phNo"
                onChange={phonenoChange}
              />
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
                  <input
                    type="date"
                    name="day"
                    size="50"
                    onChange={dateChange}
                    style={{ width: "260px" }}
                  />
                </div>
                {/* <div className="col-third">
                  <input type="text" placeholder="MM" name="month" onChange={monthChange}/>
                </div>
                <div className="col-third">
                  <input type="text" placeholder="YYYY" name="year"onChange={yearChange} />
                </div> */}
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
                  onChange={gender}
                />
                <label htmlFor="gender-male">Male</label>
                <input
                  id="gender-female"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={gender}
                />
                <label htmlFor="gender-female">Female</label>
              </div>
            </div>
          </div>

          <button className="submit-btn btn btn-primary" onClick={saveChanges}>
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

      {/* <EditInfo /> */}
    </>
  );
}
