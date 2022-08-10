import { useRequest } from "../../hooks/request-hook";
import useInput from "../../hooks/useInput";
import { useState } from "react";
import Joblist from "./Joblist";
const isSearch = value => value.trim() !== '';
const Search = ()=>
{
  const {value:Search,reset:resetSearch,valueChangeHandler:searchChange} = useInput(isSearch)
  const {value:Place,reset:resetLocation,valueChangeHandler:searchLocation} = useInput(isSearch)
  const [details,setDetails]= useState([]) 
    const {sendRequest} = useRequest()
    const submitHandler =async(event)=>
    {
      // console.log(Search)
      const response = await sendRequest(
        'http://localhost:5002/users/search',  
        'POST',
        JSON.stringify({search:Search,place:Place}),
        {'Content-Type': 'application/json'}
        )
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
        <div>
         <Joblist details={details}/>
    {/* {console.log(details,'hello')} */}
        </div>
        </>
    )
}

export default Search