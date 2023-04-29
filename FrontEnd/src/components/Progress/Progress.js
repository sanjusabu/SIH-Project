import React from "react";
import NavBar from "../NavBar/NavBar";
import CurrJobdetails from "./CurrJobdetails";
import { Link } from "react-router-dom";
import classes from "./progress.module.css";
import BarGraph from "./BarGraph";
import Progressbar from "../ProgressBar/Progressbar";
import { useEffect, useState } from "react";
import { useRequest } from "../../hooks/request-hook";
import SalarySatisfaction from "./SalarySatisfaction";

const Progress = () => {
  const { sendRequest } = useRequest();
  const [currJobs, setCurrJobs] = useState([]);
  const [score, setScore] = useState([]);
  var temp2 = [1];
  useEffect(() => {
    const fetchcurrJobs = async () => {
      try {
        if (localStorage.hasOwnProperty("userid")) {
          const responseData = await sendRequest(
            "http://localhost:5002/jobs/getcurrjobs",
            "POST",
            JSON.stringify({
              userid: localStorage.getItem("userid"),
            }),
            {
              "Content-Type": "application/json",
            }
          );
          setCurrJobs(responseData);
        }
      } catch (err) {
        console.log(err);
      }
    };
    const getCurrJobScore = async () => {
      if (localStorage.hasOwnProperty("userid")) {
        const responseData = await sendRequest(
          "http://localhost:5002/jobScore/getCurrJobScore",
          "POST",
          JSON.stringify({
            userid: localStorage.getItem("userid"),
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setScore(responseData);
        console.log("gygyg", responseData);
      }
    };
    getCurrJobScore();
    fetchcurrJobs();
  }, [sendRequest]);
  let i = 0;
  return (
    <>
      <NavBar />
      <div className="addjobs d-flex justify-content-center m-4">
        <Link to="/addcurrjobs">
          <button className="btn btn-primary">Add Current Job</button>
        </Link>
      </div>
      <div className="container">
        <div className="row progresscss">
          {currJobs.map((data, index) => {
            if (currJobs.length - 1 === index)
              return (
                <div className="col-md-4" key={index}>
                  <CurrJobdetails
                    compname={currJobs[currJobs.length - 1].compname}
                    duration={currJobs[currJobs.length - 1].duration}
                    salary={currJobs[currJobs.length - 1].salary}
                    position={currJobs[currJobs.length - 1].position}
                    location={currJobs[currJobs.length - 1].location}
                    score={score[i++]}
                  />
                </div>
              );
          })}
          <div className="col-md-4">
            <SalarySatisfaction currentJob={currJobs[currJobs.length - 1]} />
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className={classes.containers}>
          <div className={classes.lefttt}>
            <div className="container my-3">
              <BarGraph />
            </div>
          </div>
          <div className={classes.rightss}>
            <div className="container my-3">
              <Progressbar score={score[0]} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className={["container", classes.skillcontainer].join(" ")}>
        <div className={["row", classes.footcontainer].join(" ")}>
          <h2 className="p-2 mb-3">Skills You should Learn</h2>
          <div className="col-md-4">
            <div className={["card", classes.skillcard].join(" ")}>
              <div className="card-header">
                <h2>Leadership</h2>
              </div>
              <div className="card-body">
                <h5 className="card-title p-2">Special title treatment</h5>
                <Link to="/skillsrecommend" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={["card", classes.skillcard].join(" ")}>
              <div className="card-header">
                <h2>Communication Skills</h2>
              </div>
              <div className="card-body">
                <h5 className="card-title p-2">Special title treatment</h5>
                <Link to="/skillsrecommend" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={["card", classes.skillcard].join(" ")}>
              <div className="card-header">
                <h2>Next.Js</h2>
              </div>
              <div className="card-body">
                <h5 className="card-title p-2">Special title treatment</h5>
                <Link to="/skillsrecommend" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Progress;
