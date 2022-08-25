import React from "react";

const Jobdetails = (props) => {
  let { compname, duration, salary, position, location } = props;
  return (
    <div>
      <div className="my-3">
        <div className="card">
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

export default Jobdetails;
