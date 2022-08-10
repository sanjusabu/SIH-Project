import React from 'react';
import classes from './Jobs.module.css';

const Jobs = (props) => {
  return (
    <li className={classes.movie}>
      <h1>{props.title}</h1>
      <h2>{props.company}</h2>
      <h4>{props.location}</h4>
      <p>{props.description}</p>
    </li>
  );
};

export default Jobs;