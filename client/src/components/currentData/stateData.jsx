import React from 'react';
import axios from "axios";
// import StateChart from '../chart/stateChart';

export default class StateData extends React.Component {
  date = new Date().getDate() - 1;
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();

  constructor() {
    super();
    this.state = {
      value: "",
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    console.log("this is being called")
    this.getState(this.state.value);
    this.setState({ value: event.target.value });    
  }


  async getState() {
    let value = this.props.state.province;
    let res = await axios.get("https://api.covidtracking.com/v1/states/" + value + "/current.json");
    console.log(res.data)
    this.setState({
      data: res.data,
      value: res.data.state
    });
  }

  render() {  
    return (
      <>
        <div id="stateData">
          <h5 className="dataTitle">{this.state.data.state} Data</h5>
          <p>Total Tests: {this.state.data.totalTestResults}</p>
          <p>Positive Tests: {this.state.data.positive}</p>
          <p>Negative Tests: {this.state.data.negative}</p>
          <p>Currently Hospitalized: {this.state.data.hospitalizedCurrently}</p>
          <p>Deaths: {this.state.data.death}</p>
        </div>
        <p className="disclosure">Disclosure: All data is sourced from The COVID Tracking Project and is up-to-date as of {this.month}/{this.date}/{this.year}. Please note that not all testing is reported and numbers may slightly vary from CDC data. </p>

      </>
    )
  }
}