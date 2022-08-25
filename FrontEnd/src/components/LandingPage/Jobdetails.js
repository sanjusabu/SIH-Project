import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "./adPrev.module.css";
const Jobdetails = (props) => {
  const navigate = useNavigate()
  const FillSurveyHandler = (e)=>
  {
    // e.preventDefault()
    navigate('/formd')
  }
  
  let { compname, duration, salary, position, location } = props;
  return (
    <div>
      <div className="my-3">
        <div className={["card border-0", classes.currjobs].join(" ")}>
          <div className="card-body">
            <h5 className="card-title text-center">{compname}</h5>
            <br />
            <p className="card-text">{duration}</p>
            <p className="card-text">{salary}</p>
            <p className="card-text">{location}</p>
            <p className="card-text">Job Score: {location}</p>
            <p className="card-text">
              <small className="text-muted">Positioned as {position}</small>
            </p>
            <p>
              {/* <Link to="/formd"> */}
              <button className="btn btn-primary" onClick={FillSurveyHandler}>Fill Survey</button>
              {/* </Link> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobdetails;
