import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" style={{ height: "120px", backgroundColor: "#f0f0f0" }}>
      <h3 className="text-center">All Rights Reserved &copy; Swastik Chatterjee</h3>
      <p className="text-center mt-2">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
