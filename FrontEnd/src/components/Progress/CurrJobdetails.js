import React from "react";
import classes from "./progress.module.css";

const currJobdetails = (props) => {
  let { compname, duration, salary, position, location } = props;
  return (
    <div>
      <div className="my-2">
        <div className={["card border-0", classes.currjobs].join(" ")}>
          <div className="card-body">
            <h5 className="card-title text-center">{compname}</h5>
            <br />
            <p className="card-text">{duration}</p>
            <p className="card-text">{salary}</p>
            <p className="card-text">{location}</p>
            <p className="card-text">
              <small className="text-muted">Positioned as {position}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default currJobdetails;
