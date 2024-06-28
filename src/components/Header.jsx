import { useState } from "react";
import logo from "../assets/images/logo.png";
/************************************************************ Hamburger coding ******************************************* */

const Header = ({ ...props }) => {
  const [isActive, setActive] = useState(false);
  return (
    <header className="parent-container" id="header-sec">
      <div className="header-div sub-container">
        <div className="header-col1">
          <a href="/">
            {" "}
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <div className="header-col2">
          <div
            className="hamburger"
            onClick={() => {
              setActive(!isActive);
              props.pass().classList.toggle("active");
            }}
          >
            <div className="hamburger-menu"></div>
          </div>
          <nav className={`nav ${isActive ? "active" : ""}`}>
            <ul className="nav-list">
              <li className="nav-items hide-items">
                <button
                  className="hide-btn"
                  onClick={() => {
                    setActive(!isActive);
                    props.pass().classList.toggle("active");
                  }}
                >
                  X
                </button>
              </li>
              <li className="nav-items">
                <a
                  href="#home-sec"
                  className="items-link"
                  onClick={() => {
                    setActive(!isActive);
                    props.pass().classList.toggle("active");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-items">
                <a
                  href="#service-sec"
                  className="items-link"
                  onClick={() => {
                    setActive(!isActive);
                    props.pass().classList.toggle("active");
                  }}
                >
                  Services
                </a>
              </li>
              <li className="nav-items">
                <a
                  href="#skill-sec"
                  className="items-link"
                  onClick={() => {
                    setActive(!isActive);
                    props.pass().classList.toggle("active");
                  }}
                >
                  Skills
                </a>
              </li>
              <li className="nav-items">
                <a
                  href="#project-sec"
                  className="items-link"
                  onClick={() => {
                    setActive(!isActive);
                    props.pass().classList.toggle("active");
                  }}
                >
                  Projects
                </a>
              </li>
              <li className="nav-items">
                <a
                  href="#contact-sec"
                  className="items-link"
                  onClick={() => {
                    setActive(!isActive);
                    props.pass().classList.toggle("active");
                  }}
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav>

          {/* <div className="social-icons-div"></div> */}
        </div>
        <div className="header-col3">
          {" "}
          <a href="mailto:www.owaistag@gmail.com">
            <div className="header-btn-div">
              <div className="btn-bg"></div>
              <div className="header-btn">Hire me</div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
