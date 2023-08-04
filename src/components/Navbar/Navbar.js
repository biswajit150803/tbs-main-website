import React,{ useState } from "react";
import "./Navbar.css";
import { BsFillHddStackFill } from "react-icons/bs";
import { logo } from "../../assets";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="nav-sticky">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
             <img src={logo} alt="logo" className="logN" />         
              <span className="logospan">The Bengal Studio</span>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <BsFillHddStackFill />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li className="hov pot" >
                Home
              </li>
              <li className="hov pot" >
                Blog
              </li>
              <li className="hov pot" >
                Career
              </li>
              <li className="hov pot"  >
                About Us
              </li>              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;