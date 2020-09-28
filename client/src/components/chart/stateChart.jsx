import React from 'react';
import { Component } from 'react'
import CanvasJSReact from './canvasChart/canvasjs.react';
import axios from 'axios';

// let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

let dataPoints = [];

export default class StateChart extends Component {
	componentDidMount() {
		let chart = this.chart;
		let value = "NC";
		console.log(value)
		axios.get('https://data.cdc.gov/resource/9mfq-cb36.json?state=' + value)
			.then((res)=> {
				// console.log(res.data)
				for (let i = 41; i < res.data.length; i++) {
					dataPoints.push({
						x: new Date(res.data[i].submission_date),
						y: parseInt(res.data[i].new_case)
					});
				}
				chart.render();
			});
	}

	render() {
		const options = {
			theme: "light2",
			title: {
				text: " Case Trend"
			},
			axisY: {
				title: "New Cases",
				prefix: ""
			},
			data: [{
				type: "line",
				xValueFormatString: "MMMM DD YYYY",
				yValueFormatString: "",
				dataPoints: dataPoints
			}]
		}
		return (
			<>
				<div>
					<CanvasJSChart options={options}
						onRef={ref => this.chart = ref}
					/>
				</div>
			</>
		);
	}


}

