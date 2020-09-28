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

  render() {
    return (
      <>
        <div className="mapWrapper">
          <Map
            province={this.provinceCallback}
            counties={this.countylistCallback}
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
      </>
    );
  }
}
