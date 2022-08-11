import React from 'react';
import classes from './Jobs.module.css';
import {Link} from 'react-router-dom'
const Jobs = (props) => {
  console.log(props);    
  return (

    <li className={classes.movie}>
      <h1>{props.title}</h1>
      <h2>{props.company}</h2>
      <h4>{props.location}</h4>
      <p>{props.description}</p>
      <br />
      <button><Link to={props.url}>More Info</Link></button>
    </li>
  );
};

export default Jobs;