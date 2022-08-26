import React from "react";
import classes from "./Topjobs.module.css";

const Topjobs = () => {
  return (
    <div className="container my-3">
      <div className="jobs">
        <h1 className={classes.headd}>Top Jobs</h1>
        <div className={classes.optionss}>
          <h3 className={classes.titlee}>Retail / Wholesale</h3>
          <h4 className={classes.servicee}>Bengaluru</h4>
          <h5 className={classes.timee}>500000</h5>
          <div className={classes.containerss}>
           
          </div>
          
        </div>
        <div className={classes.optionss}>
          <h3 className={classes.titlee}>Corporate Search</h3>
          <h4 className={classes.servicee}>Software Developer</h4>
          <h5 className={classes.timee}>500000</h5>
          <div className={classes.containerss}>
            
          </div>
        </div>
        <div className={classes.optionss}>
          <h3 className={classes.titlee}>Kay Labs</h3>
          <h4 className={classes.servicee}>Unica</h4>
          <h5 className={classes.timee}>500000</h5>
         
        </div>
      
      </div>
    </div>
  );
};

export default Topjobs;
