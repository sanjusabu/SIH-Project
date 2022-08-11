import React from "react";
import Jobdetails from "./Jobdetails";

const Pastjobs = () => {
  const jobs = [
    {
      company_name: "CillyFox",
      duration: "2 Months",
      salary: "15000",
      position: "Software Developer",
      location: "Borivali",
    },
    {
      company_name: "Microsoft",
      duration: "3 Months",
      salary: "75000",
      position: "Software Developer",
      location: "Delhi",
    },
    {
      company_name: "Amazon",
      duration: "6 Months",
      salary: "150000",
      position: "Marketing Lead",
      location: "Bangalore",
    },
    {
      company_name: "FlipKart",
      duration: "2 Months",
      salary: "35000",
      position: "HR",
      location: "Hyderabad",
    },
  ];
  return (
    <>
      <div className="addjobs d-flex justify-content-center m-4">
        <button className="btn btn-primary">Add Previous Jobs</button>
      </div>
      <div className="container">
        <div className="row">
          {jobs.map((element) => {
            return (
              <div className="col-md-4" key={element.company_name}>
                <Jobdetails
                  compname={element.company_name}
                  duration={element.duration}
                  salary={element.salary}
                  position={element.position}
                  location={element.location}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pastjobs;
