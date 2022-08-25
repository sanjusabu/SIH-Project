import React from "react";
import classes from "./Home.module.css";

const Specialities = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.he}>
          <h3>Job search according to the location</h3>
        </div>
        {/* <div className={classes.row}> */}
        <div className={classes.im}>
          <img
            src={require("./jobslocation.jpg").default}
            height="180"
            width="180"
          />
        </div>
        <div className={classes.para}>
          <h6>
            Services to help you get hired, faster: from preparing your CV,
            getting recruiter attention, finding the right jobs, and more!
          </h6>
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.he}>
          <h3>Recommending skills for a job</h3>
        </div>
        {/* <div className={classes.row}> */}
        <div className={classes.im}>
          <img
            src={require("./recommend.png").default}
            height="180"
            width="180"
          />
        </div>
        <div className={classes.para}>
          <h6>
            Services to help you get hired, faster: from preparing your CV,
            getting recruiter attention, finding the right jobs, and more!
          </h6>
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.he}>
          <h3>Keep a track of your career</h3>
        </div>
        {/* <div className={classes.row}> */}
        <div className={classes.im}>
          <img src={require("./keep.png").default} height="180" width="180" />
        </div>
        <div className={classes.para}>
          <h6>
            Services to help you get hired, faster: from preparing your CV,
            getting recruiter attention, finding the right jobs, and more!
          </h6>
        </div>
      </div>

      <br></br>
      <h3>Explore Top Companies Hiring Now</h3>

      <div className="container">
        <div className="row">
          {/* <div className="row"> */}
          <div className={["col-md-4", classes.main1].join(" ")}>
            <h4>Apisero</h4>
            <h6>Rating: 4.2</h6>
            <h6>Reviews: 113</h6>
          </div>
          <div className={["col-md-4", classes.main1].join(" ")}>
            <h4>Apisero</h4>
            <h6>Rating: 4.2</h6>
            <h6>Reviews: 113</h6>
          </div>
          <div className={["col-md-4", classes.main1].join(" ")}>
            <h4>Apisero</h4>
            <h6>Rating: 4.2</h6>
            <h6>Reviews: 113</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialities;
