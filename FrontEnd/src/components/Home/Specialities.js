import React from "react";
import classes from "./Home.module.css";

const Specialities = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.he}>
          <h3>Job search according to the Location and Job Title</h3>
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
           This is a personalised website offering the users to search jobs according to their location and the required Job Title 
          </h6>
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.he}>
          <h3>Recommending Job according to their skill</h3>
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
            We recommend jobs as per the skills the user has acquired, making it much easier for the user.
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
            We dont just leave our users after they get the job, we track their progress and see if the current job is according to their standard.
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
