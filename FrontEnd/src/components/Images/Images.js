import React from "react";
// import "react-table-6/react-table.css";
import LandingPageImage from "./LandingPageImage";

//import App from './App';
//import * as React from 'react';
import classes from "./Images.module.css";

export default function Images () {
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
      <div class="row match-to-row">
      <LandingPageImage imgLink={"https://onlyveggies.net/wp-content/uploads/2020/01/beautiful-woman-works-in-a-garden-near-the-house-HA2PMAQ-scaled.jpg"} jobType={"Gardening"}  />
      <LandingPageImage imgLink={"https://liveblogspot.com/wp-content/uploads/2018/11/Carpenter-1.jpg"} jobType={"Carpenter"}  />
      <LandingPageImage imgLink={"https://th.bing.com/th/id/OIP.xeye48mrx1p-leouvHeaOwHaEo?pid=ImgDet&rs=1 "} jobType={"Electrician "}  />
      <LandingPageImage imgLink={"https://th.bing.com/th/id/R.b141de38be660a05cccb34d5da36371c?rik=y1USBrD9aLGcuw&riu=http%3a%2f%2fwww.superpainter.com.au%2fwp-content%2fuploads%2f2013%2f02%2fpainter.jpg&ehk=lAGUYUP8IGNQttztduOicvUIPsf1gspDWIEcft%2bPPBM%3d&risl=&pid=ImgRaw&r=0 "} jobType={"Painters "}  />
      <LandingPageImage imgLink={"https://thumbs.dreamstime.com/b/street-repair-bicycles-master-streets-chinese-cities-bicycle-stalls-55399815.jpg"} jobType={"Cycle Repair Workers"}  />
      <LandingPageImage imgLink={"https://mydecorative.com/wp-content/uploads/2020/07/plumbing-services.jpg"} jobType={"Plumbers"}  />
      <LandingPageImage imgLink={"https://th.bing.com/th/id/OIP.BClDMBPqI7sT6qcoKc4JFQHaEK?pid=ImgDet&rs=1"} jobType={" Car Repair Workers"}  />
      <LandingPageImage imgLink={"https://media.gettyimages.com/photos/house-keeper-making-the-bed-laying-out-the-pillows-looking-happy-and-picture-id911864000"} jobType={"House Keeper "}  />
      <LandingPageImage imgLink={"https://th.bing.com/th/id/OIP.7SG17x2KxY9ocnk3W2GYFQHaE6?pid=ImgDet&rs=1"} jobType={"Chef"}  />
      <LandingPageImage imgLink={"https://th.bing.com/th/id/R.1fd9888852e014e9b8ab0260ce56d259?rik=eHzQZ0G8SH83Cw&riu=http%3a%2f%2fi.dawn.com%2flarge%2f2016%2f01%2f56aa49056c785.jpg&ehk=pnyslehfEhO3YNJoe%2fHQHm1TdYqk7wpSPJ%2bSvjLh7mM%3d&risl=&pid=ImgRaw&r=0"} jobType={"Construction"}  />
      <LandingPageImage imgLink={"https://www.homeshaastra.com/wp-content/uploads/2020/04/Home-Cleaning-During-COVID-19-Pandemic-850x560.jpg"} jobType={"Cleaner"}  />
      <LandingPageImage imgLink={"https://media.istockphoto.com/photos/road-maintenance-workers-fixing-the-cracks-and-potholes-picture-id538907316"} jobType={"Road Repair Workers"}  />
      {/* <LandingPageImage imgLink={" "} jobType={" "}  />
      <LandingPageImage imgLink={" "} jobType={" "}  /> */}


      </div>



      {/* <div class="row match-to-row">
        <div class="col-lg-4 col-sm-8">
          <div class="thumbnail">
            <img
              src="https://onlyveggies.net/wp-content/uploads/2020/01/beautiful-woman-works-in-a-garden-near-the-house-HA2PMAQ-scaled.jpg"
              alt=""
            ></img>
            <br></br>
            <button class="btn btn-dark">Gardening</button>
          </div>
        </div>
        <div class="col-lg-4 col-sm-8">
          <div class="thumbnail">
            <img
              src="https://liveblogspot.com/wp-content/uploads/2018/11/Carpenter-1.jpg"
              alt=""
            ></img>
            <br></br>
            <button class="btn btn-dark">Carpenter</button>
          </div>
        </div>

        <div class="col-lg-4 col-sm-8">
          <div className="thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.xeye48mrx1p-leouvHeaOwHaEo?pid=ImgDet&rs=1"
              alt=""
            ></img>
            <br></br>
            <button class="btn btn-dark">Electrician</button>
          </div>
        </div>

        <div class="row match-to-row">
          <div class="col-lg-4 col-sm-8">
            <div class="thumbnail">
              <img
                src="https://th.bing.com/th/id/R.b141de38be660a05cccb34d5da36371c?rik=y1USBrD9aLGcuw&riu=http%3a%2f%2fwww.superpainter.com.au%2fwp-content%2fuploads%2f2013%2f02%2fpainter.jpg&ehk=lAGUYUP8IGNQttztduOicvUIPsf1gspDWIEcft%2bPPBM%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              ></img>
              <br></br>
              <button class="btn btn-dark">Painters</button>
            </div>
          </div>
          <div class="col-lg-4 col-sm-8">
            <div class="thumbnail">
              <img
                src="https://thumbs.dreamstime.com/b/street-repair-bicycles-master-streets-chinese-cities-bicycle-stalls-55399815.jpg"
                alt=""
              ></img>
              <br></br>
              <button class="btn btn-dark">Cycle Repair Workers</button>
            </div>
          </div>
          <div class="col-lg-4 col-sm-8">
            <div class="thumbnail">
              <img
                src="https://th.bing.com/th/id/OIP.BClDMBPqI7sT6qcoKc4JFQHaEK?pid=ImgDet&rs=1"
                alt=""
              ></img>
              <br></br>
              <button class="btn btn-dark"> Car Repair Workers</button>
            </div>
          </div>
        </div>

        <div class="row match-to-row">
          <div class="col-lg-4 col-sm-8">
            <div class="thumbnail">
              <img
                src="https://mydecorative.com/wp-content/uploads/2020/07/plumbing-services.jpg"
                alt=""
              ></img>
              <br></br>
              <button class="btn btn-dark">Plumber</button>
            </div>
          </div>
          <div class="col-lg-4 col-sm-8">
            <div class="thumbnail">
              <img
                src="https://media.gettyimages.com/photos/house-keeper-making-the-bed-laying-out-the-pillows-looking-happy-and-picture-id911864000"
                alt=""
              ></img>
              <br></br>
              <button class="btn btn-dark">House Keeper</button>
            </div>
          </div>

          <div class="col-lg-4 col-sm-8">
            <div class="thumbnail">
              <img
                src="https://th.bing.com/th/id/OIP.7SG17x2KxY9ocnk3W2GYFQHaE6?pid=ImgDet&rs=1"
                alt=""
              ></img>
              <br></br>
              <button class="btn btn-dark">Chef</button>
            </div>
          </div>

          <div class="row flex match-to-row">
            <div class="col-lg-4 col-sm-8">
              <div class="thumbnail">
                <img
                  src="https://th.bing.com/th/id/R.1fd9888852e014e9b8ab0260ce56d259?rik=eHzQZ0G8SH83Cw&riu=http%3a%2f%2fi.dawn.com%2flarge%2f2016%2f01%2f56aa49056c785.jpg&ehk=pnyslehfEhO3YNJoe%2fHQHm1TdYqk7wpSPJ%2bSvjLh7mM%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                ></img>
                <br></br>
                <button class="btn btn-dark">Construction</button>
              </div>
            </div>
            <div class="col-lg-4 col-sm-8">
              <div class="thumbnail">
                <img
                  src="https://www.homeshaastra.com/wp-content/uploads/2020/04/Home-Cleaning-During-COVID-19-Pandemic-850x560.jpg"
                  alt=""
                ></img>
                <br></br>
                <button class="btn btn-dark">Cleaner</button>
              </div>
            </div>

            <div class="col-lg-4 col-sm-8">
              <div class="thumbnail">
                <img
                  src="https://media.istockphoto.com/photos/road-maintenance-workers-fixing-the-cracks-and-potholes-picture-id538907316"
                  alt=""
                ></img>
                <br></br>
                <button class="btn btn-dark">Road Repair Workers</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
// export default Images;
