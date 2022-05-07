import React from "react";
import "./Footer.css";
import welcome from "../../welcome.jpg"
function Footer() {
  return (
    <div className="footer">
      <h1>Contact us </h1>
      <h3>email :wafibenjeddou@gmail.com</h3>
      <img src={welcome} alt="welcome" width="100"/>

    </div>
  );
}

export default Footer;
