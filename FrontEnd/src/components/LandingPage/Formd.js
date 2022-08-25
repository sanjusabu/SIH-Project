import React from "react";
import FormComponent from "./FormComponent";
// import "react-table-6/react-table.css";
import classes from "./Formd.module.css";
//import App from './App';
//import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useRequest } from "../../hooks/request-hook";
let responseSum = 0;


const Formd = () => {
  const navigate = useNavigate();
  const uid = localStorage.getItem("userid");
  // const [addskill, setAddskill] = useState(arr);
  const { sendRequest } = useRequest();

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        // setEnteredSkill(" ");
        // console.log(EnteredSkill);
        const response = await sendRequest(
          "http://localhost:5002/jobScore/addJobScore",
          "POST",
          JSON.stringify({
            userid: uid,
            jobScore: responseSum,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        console.log(response);
        navigate("/Landingpage");
        // console.log(response.skill.skills);


        
        
      };
    

  //   const formSubmitHandler = () => {
  //   responseSum = 0;
  //   for(let i=1;i<=5;i++){
  //     let qn = "qn"+i;
  //     console.log(qn);
  //     responseSum += parseInt(document.querySelector(`input[name=${qn}]:checked`).value)

  //   }
  //   console.log(responseSum)
  // };



  return (
    <>
      <h1>Form table</h1>
      <table>
        <tr className={classes.tdItem}>
          <th style = {{textAlign:"center"}}>QUESTIONS</th>
          <td> 1</td>
          <td> 2</td>
          <td> 3</td>
          <td> 4</td>
          <td> 5</td>
          <td> 6</td>
          <td> 7</td>
          <td> 8</td>
          <td> 9</td>
          <td> 10</td>
        </tr>

        <FormComponent qnTitle={"Job Satisfaction"} qnNo={"qn1"} />
        <FormComponent qnTitle={"How hepful was the job suggestion?"} qnNo={"qn2"} />
        <FormComponent qnTitle={"xyz"} qnNo={"qn3"} />
        <FormComponent qnTitle={"ZYX"} qnNo={"qn4"} />
        <FormComponent qnTitle={"How much would you like to rate our portal"} qnNo={"qn5"} />
        
        
      </table>

      <div className={classes.cont1}>
        <input type="submit" value="Submit" onClick={formSubmitHandler} />
      </div>
    </>
  );
};
export default Formd;