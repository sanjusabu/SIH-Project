import React from 'react'

function LandingPageImage(props) {
    const imgLink = props.imgLink;
    const jobType = props.jobType;
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
            alt=""
          ></img>
          <br></br>
          {/* <button class="btn btn-dark">Gardening</button> */}
          <button class="btn btn-dark jobBtn">{props.jobType}</button>
        </div>
      </div>
    </>
  )
}

export default LandingPageImage
