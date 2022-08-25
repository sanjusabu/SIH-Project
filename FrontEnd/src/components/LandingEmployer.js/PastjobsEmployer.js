import React from "react";
import JobdetailsEmployer from "./JobdetailsEmployer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRequest } from "../../hooks/request-hook";

const PastjobsEmployer = () => {
  const { sendRequest } = useRequest();
  const [newJobs, setNewJobs] = useState([]);

  const fetchNewJobs = async () => {
    try {
      if (localStorage.hasOwnProperty("userid")) {
        const responseData = await sendRequest(
          "http://localhost:5002/jobs/getnewempjobs",
          "POST",
          JSON.stringify({
            userid: localStorage.getItem("userid"),
          }),
          {
            "Content-Type": "application/json",
          }
        );
        // responseData.info.map(data=>setData(data))
        // console.log(responseData)
        //  setData(responseData.info)
        setNewJobs(responseData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNewJobs();
  }, [sendRequest]);

  return (
    <>
      <div className="addjobs d-flex justify-content-center m-4">
        <Link to="/addnewemployerjobs">
          <button className="btn btn-primary">Add New Job</button>
        </Link>
      </div>
      <div className="container">
        <div className="row">
          {newJobs.map((element) => {
            return (
              <div className="col-md-4" key={element.skills}>
                <JobdetailsEmployer
                  company={element.company}
                  jobtitle={element.jobtitle}
                  education={element.education}
                  experience={element.experience}
                  industry={element.industry}
                  joblocation_address={element.joblocation_address}
                  payrate={element.payrate}
                  skills={element.skills}
                  date={element.date}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PastjobsEmployer;
