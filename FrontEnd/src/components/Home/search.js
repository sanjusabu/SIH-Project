import { useRequest } from "../../hooks/request-hook";
import useInput from "../../hooks/useInput";
import { useState } from "react";
import Joblist from "./Joblist";
import LoadingSpinner from "../../Design/UIElements/LoadingSpinner";

const isSearch = (value) => value.trim() !== "";
const Search = () => {
  const [Loading, setLoading] = useState(false);
  const {
    value: Search,
    reset: resetSearch,
    valueChangeHandler: searchChange,
  } = useInput(isSearch);
  const {
    value: Place,
    reset: resetLocation,
    valueChangeHandler: searchLocation,
  } = useInput(isSearch);
  const [details, setDetails] = useState([]);
  const { sendRequest } = useRequest();
  const submitHandler = async (event) => {
    // console.log(Search)
    setLoading(true);
    const response = await sendRequest(
      "http://localhost:5002/users/search",
      "POST",
      JSON.stringify({ search: Search, place: Place }),
      { "Content-Type": "application/json" }
    );

    setLoading(false);
    setDetails(response);

    resetLocation();
    resetSearch();
  };

  return (
    <>
      <div>
        <input
          type="text"
          className="m-2"
          placeholder="Search Jobs"
          value={Search}
          onChange={searchChange}
        />
        <input
          type="text"
          className="m-2"
          placeholder="Location"
          value={Place}
          onChange={searchLocation}
        />
        <button
          onClick={submitHandler}
          className="btn btn-outline-success p-2 m-2"
        >
          Search
        </button>
      </div>
      {Loading && <LoadingSpinner />}
      <div>
        <Joblist details={details.requiredinfo} />
      </div>
    </>
  );
};

export default Search;
