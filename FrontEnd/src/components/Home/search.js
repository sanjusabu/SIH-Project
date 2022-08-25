import { useRequest } from "../../hooks/request-hook";
import useInput from "../../hooks/useInput";
import { useState } from "react";
import Joblist from "./Joblist";
import LoadingSpinner from "../../Design/UIElements/LoadingSpinner";
import StateList from "./countries-states-cities";
import classes from "./Home.module.css";

const isSearch = value => value.trim() !== '';
const Search = ()=>
{
  const [Loading,setLoading] = useState(false)
  const {value:Search,reset:resetSearch,valueChangeHandler:searchChange} = useInput(isSearch)
  const {value:Place,reset:resetLocation,valueChangeHandler:searchLocation} = useInput(isSearch)
  const [details,setDetails]= useState([])
    const {sendRequest} = useRequest()
    const submitHandler =async(event)=>
    {
      // console.log(Search)
      setLoading(true)
      const response = await sendRequest(
        'http://localhost:5002/jobs/search',
        'POST',
        JSON.stringify({search:Search,place:Place}),
        {'Content-Type': 'application/json'}
        )
        console.log(response)
        // const display = response.ma
    setLoading(false)
    setDetails(response)

    resetLocation()
    resetSearch()
  }

  return(
    <>
        <div>
        <input type="text" placeholder="Search Jobs" value={Search} onChange={searchChange} />
        <input type="text" placeholder="Location" value={Place} onChange={searchLocation} />
        <button onClick={submitHandler}>Search</button>
        </div>
        <div>{Loading && <LoadingSpinner />}</div>

        <StateList />
        {/* <div>

         <Joblist details={details}/>

        </div> */}
        <div className = {classes.main}>
<div className={classes.he}>
<h3>Job search according to the location</h3></div>
{/* <div className={classes.row}> */}
        <div className={classes.im}>
        <img  src={require('./jobslocation.jpg').default} height="180" width="180" />
        </div>
        <div className={classes.para}>
        <h6>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</h6>
        </div>

        
        
        </div>
        <div className = {classes.main}>
<div className={classes.he}>
<h3>Recommending skills for a job</h3></div>
{/* <div className={classes.row}> */}
        <div className={classes.im}>
        <img  src={require('./recommend.png').default} height="180" width="180" />
        </div>
        <div className={classes.para}>
        <h6>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</h6>
        </div>
        
        </div>
        <div className = {classes.main}>
<div className={classes.he}>
<h3>Keep a track of your career</h3></div>
{/* <div className={classes.row}> */}
        <div className={classes.im}>
        <img  src={require('./keep.png').default} height="180" width="180" />
        </div>
        <div className={classes.para}>
        <h6>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</h6>
        </div>
       
        
        
        </div>
         

        {/* </div> */}
        <Joblist details={details}/><br></br>
        <h3 >Explore Top Companies Hiring Now</h3>
        {/* <div className={classes.com}>
        <div className={classes.main1}>

          <br></br>
          <br></br>
        <h4>Apisero</h4>
        <h6>Rating: 4.2</h6>
        <h6>Reviews: 113</h6>
        </div>
        
       

         <div className={classes.c1}>
        <div className={classes.main2}>
        <br></br>
          <br></br>
          <br></br>

        <h4>Coforge</h4>
        <h6>Rating: 3.8</h6>
        <h6>Reviews: 200</h6>
        </div>
        </div>
      
      <div className={classes.c2}>
        <div className={classes.main3}>
        <br></br>
          <br></br>
          <br></br>
        <h4>Diebold</h4>
        <h6>Rating: 4.0</h6>
        <h6>Reviews: 150</h6>
        
        </div>
        </div>
        </div> */}

        <div className="container">
        <div className="row">
        {/* <div className="row"> */}
        <div className={["col-md-4", classes.main1].join(" ")}>
            <h4>Apisero</h4>
            <h6>Rating: 4.2</h6>
            <h6>Reviews: 113</h6>
          </div>
          <div className={["col-md-4", classes.main1].join(" ")}>
            <h4>Apisero</h4>
            <h6>Rating: 4.2</h6>
            <h6>Reviews: 113</h6>
          </div>
          <div className={["col-md-4", classes.main1].join(" ")}>
            <h4>Apisero</h4>
            <h6>Rating: 4.2</h6>
            <h6>Reviews: 113</h6>
          </div>
        </div>
      </div>
       
        </>
    )
}

export default Search
