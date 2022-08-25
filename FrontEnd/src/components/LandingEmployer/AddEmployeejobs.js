import React, { useState } from "react";
import { useRequest } from "../../hooks/request-hook";
import { useNavigate } from "react-router-dom";
const AddEmployeejobs = () => {
  const navigate = useNavigate();
  const [jobEmployer, setJobEmployer] = useState({
    company: "",
    jobtitle: "",
    education: "",
    experience: 0,
    industry: "",
    joblocation_address: "",
    payrate: 0,
    vacancy: 0,
    skills: "",
  });
  const { sendRequest } = useRequest();
  const handleChange = (e) => {
    setJobEmployer({ ...jobEmployer, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (localStorage.hasOwnProperty("userid")) {
      const response = await sendRequest(
        "http://localhost:5002/jobs/addnewemployerjobs",
        "POST",
        JSON.stringify({
          company: jobEmployer.company,
          jobtitle: jobEmployer.jobtitle,
          education: jobEmployer.education,
          experience: jobEmployer.experience,
          industry: jobEmployer.industry,
          joblocation_address: jobEmployer.joblocation_address,
          payrate: jobEmployer.payrate,
          skills: jobEmployer.skills,
          vacancy: jobEmployer.vacancy,
          userid: localStorage.getItem("userid"),
        }),
        {
          "Content-Type": "application/json",
        }
      );
    }
    navigate("/landingEmployer");
    //  console.log(response)
  };

  return (
    <div className="container my-4">
      <h1>Add New Jobs</h1>
      <form className="my-3" onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="compname" className="form-label">
            <h4>Company Name</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="company"
            value={jobEmployer.company}
            name="company"
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="jobtitle" className="form-label">
            <h4>Job Title</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="jobtitle"
            value={jobEmployer.jobtitle}
            onChange={handleChange}
            name="jobtitle"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="education" className="form-label">
            <h4>Education</h4>
          </label>
          <input
            type="text"
            className="form-control"
            value={jobEmployer.education}
            onChange={handleChange}
            id="education"
            name="education"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">
            <h4>Experience</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="experience"
            value={jobEmployer.experience}
            onChange={handleChange}
            name="experience"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="industry" className="form-label">
            <h4>Job Industry</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="industry"
            value={jobEmployer.industry}
            onChange={handleChange}
            name="industry"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="joblocation_address" className="form-label">
            <h4>Location</h4>
          </label>
          <input
            type="text"
            className="form-control"
            value={jobEmployer.joblocation_address}
            onChange={handleChange}
            id="joblocation_address"
            name="joblocation_address"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            <h4>Salary</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="payrate"
            value={jobEmployer.payrate}
            onChange={handleChange}
            name="payrate"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="skills" className="form-label">
            <h4>Skills Required ( Comma Seperated )</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="skills"
            value={jobEmployer.skills}
            onChange={handleChange}
            name="skills"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="vacancy" className="form-label">
            <h4>Vacancy</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="vacancy"
            value={jobEmployer.vacancy}
            onChange={handleChange}
            name="vacancy"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddEmployeejobs;
