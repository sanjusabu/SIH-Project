import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import classes from "./progressbar.module.css";

function Progressbar() {
  const [percentage, setPercentage] = useState(0);
  let percent = 75;

  useEffect(() => {
    setTimeout(() => {
      if (percentage < percent) {
        setPercentage(percentage + 1);
      }
    }, 15);
  }, [percentage]);

  return (
    <div className="app">
      <h2 className={classes.jobsatis}>Current Job Satisfaction</h2>
      <div className="container" style={{ width: 240 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
}

export default Progressbar;
