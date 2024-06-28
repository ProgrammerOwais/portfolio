import Design from "../assets/images/design.png";
import technical from "../assets/images/technical.png";
import javaScript from "../assets/images/javascriptIcon.png";

const Service = () => {
  return (
    <div className="service parent-container" id="service-sec">
      <div className="sec2 sub-container">
        <a href="#header-sec" className="home-arrow">
          &#62;
        </a>
        <h4 className="heading4">|| My Services</h4>
        <h2 className="heading2">Services Offered to Clients</h2>
        <div className="sec2-row">
          <div className="sec2-col sec2-col1 top">
            <div className="sec2-logo-div">
              <img src={javaScript} alt="logo" className="sec2-logo" />
            </div>
            <h3 className="heading3 sec2-heading3">Expertise</h3>
            <ul className="sec2-list">
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Frontend Development
              </li>{" "}
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; MERN Stack Development
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; SPA Development
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Next.js & SSR Solutions
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Web Security & Optimization
              </li>
            </ul>
          </div>

          <div className="sec2-col sec2-col2 top">
            <div className="sec2-logo-div">
              <img src={technical} alt="logo" className="sec2-logo" />
            </div>
            <h3 className="heading3 sec2-heading3">Technical Support</h3>
            <ul className="sec2-list">
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Frontend Technical Support
              </li>{" "}
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Component Based
                Architecture
              </li>{" "}
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; API Integration &
                Development
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Dev Tools & Debugging
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Code Reviews & Feedback
              </li>
            </ul>
          </div>
          <div className="sec2-col sec2-col3 top">
            <div className="sec2-logo-div">
              <img src={Design} alt="logo" className="sec2-logo" />
            </div>
            <h3 className="heading3 sec2-heading3">Design Conversion</h3>
            <ul className="sec2-list">
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Pixel-Perfect Design
                Conversion
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Figma to Code
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Mobile First Design
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Fully Responsive Design
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; W3C Standards Compliance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
