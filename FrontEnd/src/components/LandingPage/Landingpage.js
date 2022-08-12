import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
const Landingpage = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="contain">
          <form className="search d-flex my-5" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="container">
          <div className="containers">
            <div className="left">
              <div className="jobs">
                <div className="conta d-flex">
                  <h2 className="head">Jobs</h2>
               
                </div>

                <div className="options">
                  <h3 className="title">CillyFox</h3>
                  <p className="service">Liquid eLearning Services</p>
                  <h6 className="time">Time Period : 3 Months</h6>
                  <h6 className="proglanguage">Language : Python</h6>
                </div>
                <div className="options">
                  <h3 className="title">CillyFox</h3>
                  <p className="service">Liquid eLearning Services</p>
                  <h6 className="time">Time Period : 3 Months</h6>
                  <h6 className="proglanguage">Language : Python</h6>
                </div>
                <div className="options">
                  <h3 className="title">CillyFox</h3>
                  <p className="service">Liquid eLearning Services</p>
                  <h6 className="time">Time Period : 3 Months</h6>
                  <h6 className="proglanguage">Language : Python</h6>
                </div>
              </div>
            </div>
            <div className="right">
              <h2 className="head">Profile</h2>
              <div className="options">
                <div className="ima">
                  <div className="image">
                    <i className="fa-solid fa-user prof"></i>
                  </div>
                </div>
                <div className="details">
                  <h3 className="name">Meet Jain</h3>
                  <p className="text">
                    <small className="text-muted">
                      B.Tech From IIIT SriCity
                    </small>
                  </p>
                  <div className="butt d-flex justify-content-md-center">
                    <Link to="/profile">
                      <button className="btn btn-primary">
                        Update Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
