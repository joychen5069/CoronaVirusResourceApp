import React from 'react';
import './Current.css';
import axios from "axios";

export default class CurrentData extends React.Component {
    state = {
        data: []
    }

    date = new Date().getDate() - 1;
    month = new Date().getMonth() +1 ;
    year = new Date().getFullYear();



    componentDidMount() {
        axios.get("https://api.covidtracking.com/v1/us/current.json")
            .then(res => {
                console.log(res.data[0]);
                this.setState({ data: res.data[0] })
            })
    }

    render() {
        return (
            <>
                <div className="container row dataCol">
                    <div className="col-sm-12 col-md-12" id="test">
                        <h5 className="dataTitle">US Testing Data</h5>
                        <p>Total Tests: {this.state.data.totalTestResults}</p>
                        <p>Positive Tests: {this.state.data.positive}</p>
                        <p>Negative Tests: {this.state.data.negative}</p>
                    </div>
                    <div className="col-sm-12 col-md-12" id="currentOne">
                        <h5 className="dataTitle">Current US Data</h5>
                        <p>Current Hospitalized: {this.state.data.hospitalizedCurrently}</p>
                        <p>Current ICU: {this.state.data.inIcuCurrently}</p>
                        <p>Current Ventailator: {this.state.data.onVentilatorCurrently}</p>
                    </div>
                    <div className="col-sm-12 col-md-12" id="cummulativeOne">
                        <h5 className="dataTitle">Cummulative US Data</h5>
                        <p>Total Deaths: {this.state.data.death}</p>
                        <p>Total Hospitalized: {this.state.data.hospitalizedCumulative}</p>
                        <p>Total Recovered: {this.state.data.recovered}</p>
                    </div>
                    <p className="disclosure">Disclosure: All data is sourced from The COVID Tracking Project and is up-to-date as of {this.month}/{this.date}/{this.year}. Please note that not all testing is reported and numbers may slightly vary from CDC data. </p>
                </div>
            </>
        )
    }
}