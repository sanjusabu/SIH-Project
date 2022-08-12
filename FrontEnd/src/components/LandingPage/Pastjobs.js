import React from "react";
import Jobdetails from "./Jobdetails";
import { Link } from "react-router-dom";
import Addprevjobs from "./Addprevjobs";
import { useEffect,useState } from "react";
import { useRequest } from "../../hooks/request-hook";

const Pastjobs = () => {
  const {sendRequest} = useRequest()
  const [prevJobs,setprevJobs] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5002/jobs/addprevjobs'
        );
        console.log(responseData.jobs)
        setprevJobs(responseData.jobs)
      } catch (err) {
        console.log(err)
      }
    };
    fetchUsers();
  }, [sendRequest]);



  return (
    <>
      <div className="addjobs d-flex justify-content-center m-4">
       <Link to='/addpreviousjobs'><button className="btn btn-primary">Add Previous Jobs</button></Link>
      </div>
      <div className="container">
        <div className="row">
          {console.log(prevJobs,"chekckskk")}
          {
          prevJobs.map((element) => {
            return (
              <div className="col-md-4" key={element.compname}>
                <Jobdetails
                  compname={element.compname}
                  duration={element.duration}
                  salary =  {element.salary}
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
