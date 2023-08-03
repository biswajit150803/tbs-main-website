import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLeft">
        <span className="footerLogo">TBS</span>
        <p className="footerPara">Think Simple Build Unique</p>
      </div>
      <div className="footerMiddle">
        <div className="aboutus">
          <span
            style={{
              color: "#FFF",
              fontFamily: "Orbitron",
              fontSize: "25px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              paddingLeft: "35px",
            }}
          >
            About Us
          </span>
          <ul className="ul">
            <li className="li">About TBS</li>
            <li className="li">Contact us</li>
            <li className="li">FAQ</li>
            <li className="li">Privacy Policy</li>
            <li className="li">Terms Of Services</li>
          </ul>
        </div>
        <div className="services">
          <span
            style={{
              color: "#FFF",
              fontFamily: "Orbitron",
              fontSize: "25px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              paddingLeft: "35px",
            }}
          >
            Services
          </span>
          <ul className="ul">
            <li className="li">NFT Marketplace</li>
            <li className="li">Virtual Content</li>
            <li className="li">Gaming</li>
            <li className="li">Artwork</li>
            <li className="li">Online Travel</li>
          </ul>
        </div>
      </div>
      <div className="footerContact">
        <div className="footerHeading">
          <span
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Orbitron",
              fontSize: "25px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
            Contact
          </span>
        </div>
        <div className="footerIcons">
          <div className="icon">
            <BsLinkedin className="iconn" />
          </div>
          <div className="icon">
            <BsTwitter className="iconn" />
          </div>
          <div className="icon">
            <BsInstagram className="iconn" />
          </div>
          <div className="icon">
            <BsFacebook className="iconn" />
          </div>
        </div>
        <div className="footerPara">
          <p style={{
            color: "#FFF",
              fontFamily: "Poppins",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              width:"263px"
          }}>2023 © thebengalstudio.com All right reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
