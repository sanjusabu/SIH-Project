import React, {useState,useEffect} from "react";
import classes from "./SalarySatisfaction.module.css";

const experience = [1,3,2,1,3,2];
const salary =[200000,450000,150000,200000,500000,100000]

function SalarySatisfaction(props) {
  let bgCol = "";
  const [bgColor,setbgColor] = useState("");
  useEffect(() => {
    setbgColor(bgCol)
    console.log(bgCol);
    satisfaction();
    // bgColor = ("blue")
  },[bgColor,satisfaction]);
  // bgCol = "yellow";
  // bgCol = "black";
    function avgSal(exp){
    let varSum = 0;
    let sz =0;
    for(let x=0;x<salary.length;x++){
      if(experience[x]==exp){
        varSum = varSum+salary[x];
        sz++;
      }
    }
    let avg =0;
    if(sz!=0){
      avg = varSum/sz;
    }
    return avg;
  }

  function satisfaction(){

    let temp="";
    // let averg =2;
    //
    // let currentSal =2;
    // console.log(props?.currentJob?.salary);
    const averg =  avgSal(Number(props?.currentJob?.duration));
    const currentSal = props?.currentJob?.salary;
    console.log(currentSal)
    console.log("gcc");
    if(currentSal < (4*averg)/5){
      bgCol = "red"
      temp ="Needed i mprovement"

    }
    else if(currentSal >= (4*averg)/5 && currentSal <averg){
      temp ="Decent"
      console.log("print blue");
      bgCol = "orange"

    }
    else if(currentSal < (6*averg)/5 && currentSal >=averg){
      temp ="Good"
      bgCol = "yellow"
    }
    else if(currentSal >= (6*averg)/5 ){
      temp ="Great!"
      bgCol = "green"
      console.log("bgColor");
    }
    return temp;
  }
  return (
    <>
      <div className={classes.container} style={{backgroundColor:`${bgColor}`}}>
        Salary Status:{'\n'}
        {satisfaction()}
      </div>
    </>
  );
}

export default SalarySatisfaction;
