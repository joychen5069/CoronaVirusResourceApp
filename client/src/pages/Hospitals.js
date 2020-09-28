import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navigation/Navbar";
import HospitalComp from "../components/hospitals/HospitalComp";
import Assessment from "../components/members/Assessment"
import "../components/hospitals/hospital.css";

const HospitalsPage = (props) => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <Navbar logout={props.logout} />
        <div className="row ">
            <div className="col-sm-12 col-md-5">
              <Assessment />
            </div>
            <div className="col-sm-12 col-md-7">
              <HospitalComp />
            </div>
          </div>
        
        <Footer />
      </div>
    </>
  );
};
export default HospitalsPage;
