import React from "react";
import "./About.css";
import { Vector, abt } from "../../assets";
const About = () => {
  return (
    <div className="aboutContainer">
      <div className="leftdiv">
        <div className="heading">
          <span className="headingspan">
            Explore The Future Of The <span className="tbs">TBS</span>
          </span>
        </div>
        <div className="para">Think Simple Build Unique</div>
        <div className="buttondiv">
          <button className="buttonabout1">Get Started</button>
          <button className="buttonabout2">Explore Now</button>
        </div>
        <div className="aboutfooter">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <span
              style={{
                color: "#FFF",
                fontFamily: "Orbitron",
                fontSize: "24px",
                fontWeight: "500",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              29k+
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Orbitron",
                fontSize: "18px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              Artworks
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <span
              style={{
                color: "#FFF",
                fontFamily: "Orbitron",
                fontSize: "24px",
                fontWeight: "500",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              18k+
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Orbitron",
                fontSize: "18px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              Artists
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <span
              style={{
                color: "#FFF",
                fontFamily: "Orbitron",
                fontSize: "24px",
                fontWeight: "500",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              25k+
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Orbitron",
                fontSize: "18px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              Auctions
            </span>
          </div>
        </div>
      </div>
      <div className="rightdiv">
        <div style={{ display: "flex" }}>
          <img src={Vector} alt="vector" className="vectorimg" />
          <img src={abt} alt="about" className="aboutimg" />
        </div>
      </div>
    </div>
  );
};

export default About;
