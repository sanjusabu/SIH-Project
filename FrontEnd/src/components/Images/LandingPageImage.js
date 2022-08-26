import React from "react";

function LandingPageImage(props) {
  const imgLink = props.imgLink;
  const jobType = props.jobType;
  const value = props.value;
  const skillarr = [
    "Gardening",
    "Carpenter",
    "Electrician",
    "Painters",
    "Cycle Repair Workers",
    "Plumbers",
    "Car Repair Workers",
    "House Keeper",
    "Chef",
    "Construction",
    "Cleaner",
    "Road Repair Workers",
  ];

  const handleClick = (e) => {
    e.preventDefault();
    console.log(skillarr[e.target.value]);
  };
  let i = 0;
  return (
    <>
      {/* <link
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
        rel="stylesheet"
      ></link> */}

      {/* <div className="col-lg-2 col-sm-8 imgCont"> */}
      <div className="imgCont">
        <div className="thumbnail">
          <img
            // src="https://onlyveggies.net/wp-content/uploads/2020/01/beautiful-woman-works-in-a-garden-near-the-house-HA2PMAQ-scaled.jpg"
            src={props.imgLink}
            alt="Loading"
          ></img>
          <br></br>
          {/* <button class="btn btn-dark">Gardening</button> */}
          <button class="btn btn-dark jobBtn">{props.jobType}</button>
        </div>
      </div>
    </>
  );
}

export default LandingPageImage;
