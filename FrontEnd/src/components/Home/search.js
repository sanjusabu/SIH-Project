import { useRequest } from "../../hooks/request-hook";
import useInput from "../../hooks/useInput";
import { useState } from "react";
import Joblist from "./Joblist";
import LoadingSpinner from "../../Design/UIElements/LoadingSpinner";
import StateList from "./countries-states-cities";

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
        <div>

         <Joblist details={details}/>

        </div>
        </>
    )
}

export default Search
