import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navigation/Navbar";
import StateSearch from "../components/members/StateSearch"
import "../components/newsComponent/news.css";

const ChartComp = (props) => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <Navbar logout={props.logout} />

        <h3 className="text-center pageTitle">Country and State Trends</h3>
        <StateSearch />
        <div className="row">
          input chart here
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ChartComp;
