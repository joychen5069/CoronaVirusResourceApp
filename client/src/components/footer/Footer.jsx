import React from "react";
import "../../pages/Pages.css";

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <>
      <footer>
        <p className="py-3">
          &copy;{currentYear} &bull; COVID-19 Tracker App &bull; Contributors:
           Cate Dunn, Joy Chen, Shiva Sharma,
          Travis Cultreri{" "}
        </p>
      </footer>
    </>
  );
};
export default Footer;
