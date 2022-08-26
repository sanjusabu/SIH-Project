import React from "react";
// import "react-table-6/react-table.css";
import LandingPageImage from "./LandingPageImage";
import "./landingPageImage.css";

//import App from './App';
//import * as React from 'react';
import classes from "./Images.module.css";

export default function Images() {
  return (
    <>
      {/* <link
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
        rel="stylesheet"
      ></link> */}
      {/* <div class="row match-to-row"> */}
      <div className="rows">
        <LandingPageImage
          imgLink={
            "https://onlyveggies.net/wp-content/uploads/2020/01/beautiful-woman-works-in-a-garden-near-the-house-HA2PMAQ-scaled.jpg"
          }
          jobType={"Gardening"}
          value={0}
        />
        <LandingPageImage
          imgLink={
            "https://liveblogspot.com/wp-content/uploads/2018/11/Carpenter-1.jpg"
          }
          jobType={"Carpenter"}
          value={1}
        />
        <LandingPageImage
          imgLink={
            "https://th.bing.com/th/id/OIP.xeye48mrx1p-leouvHeaOwHaEo?pid=ImgDet&rs=1 "
          }
          jobType={"Electrician "}
          value={2}
        />
        <LandingPageImage
          imgLink={
            "https://th.bing.com/th/id/R.b141de38be660a05cccb34d5da36371c?rik=y1USBrD9aLGcuw&riu=http%3a%2f%2fwww.superpainter.com.au%2fwp-content%2fuploads%2f2013%2f02%2fpainter.jpg&ehk=lAGUYUP8IGNQttztduOicvUIPsf1gspDWIEcft%2bPPBM%3d&risl=&pid=ImgRaw&r=0 "
          }
          jobType={"Painters "}
          value={3}
        />
        <LandingPageImage
          imgLink={
            "https://thumbs.dreamstime.com/b/street-repair-bicycles-master-streets-chinese-cities-bicycle-stalls-55399815.jpg"
          }
          jobType={"Cycle Repair Workers"}
          value={4}
        />
      </div>
      <div className="rows">
        <LandingPageImage
          imgLink={
            "https://mydecorative.com/wp-content/uploads/2020/07/plumbing-services.jpg"
          }
          jobType={"Plumbers"}
          value={5}
        />
        <LandingPageImage
          imgLink={
            "https://th.bing.com/th/id/OIP.BClDMBPqI7sT6qcoKc4JFQHaEK?pid=ImgDet&rs=1"
          }
          jobType={" Car Repair Workers"}
          value={6}
        />
        <LandingPageImage
          imgLink={
            "https://media.gettyimages.com/photos/house-keeper-making-the-bed-laying-out-the-pillows-looking-happy-and-picture-id911864000"
          }
          jobType={"House Keeper"}
          value={7}
        />
        <LandingPageImage
          imgLink={
            "https://th.bing.com/th/id/OIP.7SG17x2KxY9ocnk3W2GYFQHaE6?pid=ImgDet&rs=1"
          }
          jobType={"Chef"}
          value={8}
        />
        <LandingPageImage
          imgLink={
            "https://th.bing.com/th/id/R.1fd9888852e014e9b8ab0260ce56d259?rik=eHzQZ0G8SH83Cw&riu=http%3a%2f%2fi.dawn.com%2flarge%2f2016%2f01%2f56aa49056c785.jpg&ehk=pnyslehfEhO3YNJoe%2fHQHm1TdYqk7wpSPJ%2bSvjLh7mM%3d&risl=&pid=ImgRaw&r=0"
          }
          jobType={"Construction"}
          value={9}
        />
      </div>
      <div className="rows">
        <LandingPageImage
          imgLink={
            "https://www.homeshaastra.com/wp-content/uploads/2020/04/Home-Cleaning-During-COVID-19-Pandemic-850x560.jpg"
          }
          jobType={"Cleaner"}
          value={10}
        />
        <LandingPageImage
          imgLink={
            "https://media.istockphoto.com/photos/road-maintenance-workers-fixing-the-cracks-and-potholes-picture-id538907316"
          }
          jobType={"Road Repair Workers"}
          value={11}
        />
      </div>
    </>
  );
}
// export default Images;
