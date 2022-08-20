import { Bar } from "react-chartjs-2";
import React from "react";
// import {CategoryScale} from 'chart.js'; 
// Bar.register(CategoryScale);
import Chart from 'chart.js/auto';
import classes from "./BarGraph.module.css"
                                 

function BarGraph() {
return (
	<div className={classes.barCont}>
	<div style={{ maxWidth: "650px" ,height: "50%",width:"100%",alignContent:"center",alignItems:"center"}}>
		<Bar
		data={{
			labels: ["IIITS(2011-2015)", "Flipkart(2015-2017)", "Amazon(2017-2021)", "Microsoft(2021-current)"],
			datasets: [
			{
				label: "Salary (in lpa)",
				data: [7.5, 20, 25, 40],
				backgroundColor: ["aqua", "green", "red", "yellow"],
				borderColor: ["aqua", "green", "red", "yellow"],
				borderWidth: 0.5,
			},
			],
		}}
		height={400}
		options={{
			maintainAspectRatio: false,
			scales: {
			yAxes: [
				{
				ticks: {
					beginAtZero: true,
				},
				},
			],
			},
			legend: {
			labels: {
				fontSize: 15,
			},
			},
		}}
		/>
	</div>
	</div>
);
}

export default BarGraph;
