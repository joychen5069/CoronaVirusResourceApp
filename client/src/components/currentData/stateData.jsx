import React from 'react';
import axios from "axios";
import StateChart from '../chart/stateChart';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.getState(this.state.value);
  };

  async getState(value) {
    // let stateSelected = this.value;
    let res = await axios.get("https://api.covidtracking.com/v1/states/" + value + "/current.json");
    // console.log(res.data)
    this.setState({
      data: res.data,
      value: res.data.state
    });
  }

  render() {
    let stateList = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
    let stateOptions = stateList.map((state, i) => (
      <option value={state} key={i}>
        {state}
      </option>
    ));
    return (
      <>
      <div className="row">
        <form onSubmit={this.handleSubmit} className="dropdownOptionForm">
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="">Select a state</option>
              {stateOptions}
            </select>
            <input
              type="submit"
              value="Click to view data"
              className="stateSubmitBtn"
            ></input>
          </label>
        </form>
        </div>
        <div className="row">
        <div className="col-4">
          <div id="stateData">
            <h5 className="dataTitle">{this.state.data.state} Data</h5>
            <p>Total Tests: {this.state.data.totalTestResults}</p>
            <p>Positive Tests: {this.state.data.positive}</p>
            <p>Negative Tests: {this.state.data.negative}</p>
            <p>Currently Hospitalized: {this.state.data.hospitalizedCurrently}</p>
            <p>Deaths: {this.state.data.death}</p>
          </div>
          <p className="disclosure">Disclosure: All data is sourced from The COVID Tracking Project and is up-to-date as of {this.month}/{this.date}/{this.year}. Please note that not all testing is reported and numbers may slightly vary from CDC data. </p>
        </div>
        <div className="col-8">
          <StateChart state={this.state}/>
        </div>
        </div>
      </>
    )
  }
}