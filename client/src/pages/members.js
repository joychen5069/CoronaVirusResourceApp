import React, { Component } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./Pages.css";
import Navbar from "../components/navigation/Navbar";
import CountryChart from "../components/CountryChart/countryChart"
import CurrentData from "../components/currentData/Current"

const Members = (props) => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <Navbar logout={props.logout} />
        <h3 className="text-center pageTitle">Welcome to your members dashboard!</h3>
        
        <div className="container">
        
          <div className="row">
          
            <div className="col-sm-12 col-md-4">
            <CurrentData />
            </div>
            <div className="col-sm-12 col-md-8">
              <CountryChart />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Members;
