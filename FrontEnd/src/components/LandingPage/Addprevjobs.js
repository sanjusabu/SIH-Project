import React, { useState } from "react";
import axios from "axios";

const Addprevjobs = () => {
  const [job, setJob] = useState({
    compname: "",
    duration: "",
    salary: 0,
    position: "",
    location: "",
  });

  // useEffect(() => {
  //   getPrevJobs();
  //   // eslint-disable-next-line
  // }, []);

  // const getPrevJobs = () => {
  //   axios
  //     .get("/addjob")
  //     .then((response) => {
  //       const data = response.data;
  //       setJob({ posts: data });
  //       console.log(job.posts);
  //     })
  //     .catch(() => {
  //       alert("Error retrieving jobs");
  //     });
  // };

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    const payload = {
      compname: job.compname,
      duration: job.duration,
      salary: job.salary,
      position: job.position,
      location: job.location,
    };

    axios({
      url: "/addjob/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server");
        setJob({
          compname: "",
          duration: "",
          salary: 0,
          position: "",
          location: "",
        });
      })
      .catch(() => {
        console.log("Internal Server Error");
      });
  };

  return (
    <div className="container my-4">
      <h1>Add Jobs</h1>
      <form className="my-3" onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="compname" className="form-label">
            <h4>Company Name</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="compname"
            value={job.compname}
            name="compname"
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">
            <h4>Duration</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="duration"
            value={job.duration}
            onChange={handleChange}
            name="duration"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            <h4>Salary</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="salary"
            value={job.salary}
            onChange={handleChange}
            name="salary"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            <h4>Position</h4>
          </label>
          <input
            type="text"
            className="form-control"
            value={job.position}
            onChange={handleChange}
            id="position"
            name="position"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            <h4>Location</h4>
          </label>
          <input
            type="text"
            className="form-control"
            value={job.location}
            onChange={handleChange}
            id="location"
            name="location"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Addprevjobs;
