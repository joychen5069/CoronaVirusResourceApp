import React from "react";
import axios from "axios";
import Map from "./Map";
import CountyDropdown from "./CountyDropdown";
import "./map.css";

export default class StateSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      province: "",
      counties: [""],
      value: "",
      data: [],
    };
  }

  async getProvince(province) {
    let res = await axios.get(
      "https://corona.azure-api.net/country/us/" + province
    );
    let countylist = res.data.City.map((city) => city.City);
    this.setState({
      province: res.data.Province_State,
      counties: countylist,
    });
  }

  provinceCallback = (province) => {
    this.setState({
      province: province,
    });
    this.getProvince(province);
  };

  countylistCallback = (counties) => {
    this.setState({
      counties: counties,
    });
  };

  async getValue(value) {
    let res = await axios.get(
      "https://api.covidtracking.com/v1/states/" + value + "/current.json"
    );
    console.log(res.data)
    this.setState({
      value: res.data.state,
      data: res.data,

    });
  }

  valueCallback = (value) => {
    this.setState({
      value: value,
    });
    this.getValue(value);
  };

  dataCallback = (data) => {
    this.setState({
      data: data,
    });
  };


  render() {
    return (
      <>
        <div className="row">
          <div className="col-3" id="stateData">
            <h5 className="dataTitle">{this.state.province} Data</h5>
            <p>Total Tests: {this.state.data.totalTestResults}</p>
            <p>Positive Tests: {this.state.data.positive}</p>
            <p>Negative Tests: {this.state.data.negative}</p>
            <p>Currently Hospitalized: {this.state.data.hospitalizedCurrently}</p>
            <p>Deaths: {this.state.data.death}</p>
          
          <p className="disclosure">Disclosure: All data is sourced from The COVID Tracking Project and is up-to-date as of {this.month}/{this.date}/{this.year}. Please note that not all testing is reported and numbers may slightly vary from CDC data. </p>
          </div>
          <div className="col-9">
            <div className="mapWrapper">
              <Map
                province={this.provinceCallback}
                counties={this.countylistCallback}
                value={this.valueCallback}
              />
            </div>
            <div className="col-sm-12 stateApiCallWrapper">
              <h5 className="stateDataText">
                State: <span className="stateName">{this.state.province}</span>
              </h5>
              <div id="react-search">
                <CountyDropdown state={this.state} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
