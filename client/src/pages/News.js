import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navigation/Navbar";
import NewsComp from "../components/newsComponent/NewsComp";
import "../components/newsComponent/news.css";

const NewsPage = (props) => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <Navbar logout={props.logout} />

        <h3 className="text-center pageTitle">NY Times Articles on COVID-19</h3>

        <div className="row newsContentWrapper">
          <NewsComp />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default NewsPage;
