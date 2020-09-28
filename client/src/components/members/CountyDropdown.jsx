import React from "react";
import axios from "axios";
import "./map.css";

export default class CountyDropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      deaths: "",
      active: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getCounty(this.state.value);
  };

  async getCounty(value) {
    let province = this.props.state.province;
    let res = await axios.get(
      "https://corona.azure-api.net/country/us/" + province + "/" + value
    );
    this.setState({
      deaths: res.data.Deaths,
      active: res.data.Active,
    });
  }

  render() {
    let counties = this.props.state.counties;
    let countyoptions = counties.map((county, i) => (
      <option value={county} key={i}>
        {county}
      </option>
    ));
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="dropdownOptionForm">
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="">Select a county</option>
              {countyoptions}
            </select>
            <input
              type="submit"
              value="Click to view the data below"
              className="stateSubmitBtn"
            ></input>
          </label>
        </form>
        <div className="countyDataWrapper">
          <h5>
            County: <span className="dataNumber"> {this.state.value} </span>
            &nbsp;&nbsp; &bull; &nbsp;&nbsp;
          </h5>
          <h5>
            Deaths: <span className="dataNumber"> {this.state.deaths} </span>
            &nbsp;&nbsp; &bull; &nbsp;&nbsp;
          </h5>
          <h5>
            Active Cases:{" "}
            <span className="dataNumber"> {this.state.active} </span>
          </h5>
        </div>
      </div>
    );
  }
}
