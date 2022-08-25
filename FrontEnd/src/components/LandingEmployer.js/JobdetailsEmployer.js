import React from "react";

const JobdetailsEmployer = (props) => {
  let {
    company,
    jobtitle,
    education,
    experience,
    industry,
    joblocation_address,
    payrate,
    skills,
    date,
  } = props;
  return (
    <div>
      <div className="my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">{company}</h5>
            <p className="card-text">{jobtitle}</p>
            <p className="card-text">{education}</p>
            <p className="card-text">{experience}</p>
            <p className="card-text">{industry}</p>
            <p className="card-text">{joblocation_address}</p>
            <p className="card-text">{payrate}</p>
            <p className="card-text">{skills}</p>
            <p className="card-text">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobdetailsEmployer;
