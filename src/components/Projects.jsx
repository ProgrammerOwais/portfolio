import bgeccomerce from "../assets/images/bgeccommerce.jpg";
import eccommerce from "../assets/images/maineccommerce.png";
import bgAgriculture from "../assets/images/bgagriculture.png";
import brainwavebg from "../assets/images/brainwavebg.jpg";
import brainwave from "../assets/images/brainwave.jpg";
import hoobank from "../assets/images/hoobank.jpg";
import hoobankbg from "../assets/images/hoobankbg.jpg";
import agriculture from "../assets/images/agriculture.jpg";
import CandyCrush from "../assets/images/CandyCrush.png";
// import Owaissible from "../assets/images/Owaissible.png";
import taskcollab from "../assets/images/taskcollabapp.png";
import { useRef } from "react";

const Projects = () => {
  const myRef = useRef(null);

  {
    var move = 1;
  }
  return (
    <div className="projects parent-container" id="project-sec">
      <div className="sec5 sub-container">
        <h4 className="heading4">|| My Projects</h4>
        <h2 className="heading2">My Top Projects</h2>
        <div className="sec5-btn-div">
          <button
            className="sec5-btn sec5-left"
            onClick={() => {
              {
                if (window.innerWidth > 520) {
                  if (move <= 0) {
                    move += 420;
                  }
                } else {
                  if (move <= 0) {
                    move += 445;
                  }
                }

                myRef.current.style.transform = `translateX(${move}px`;
              }
            }}
          >
            &#60;&#60;
          </button>
          <button
            className="sec5-btn sec5-right"
            onClick={() => {
              {
                if (window.innerWidth > 520) {
                  if (move >= -1500) {
                    move += -420;
                  }
                } else {
                  if (move >= -1500) {
                    move += -445;
                  }
                }
                myRef.current.style.transform = `translateX(${move}px`;
              }
            }}
          >
            &#62;&#62;
          </button>
        </div>
        <div ref={myRef} className="sec5-row">
          <div className="sec5-col top sec5-col5">
            <div className="project-div">
              <div className="project-info">
                <h3 className="sec5-heading3-2">BrainWave</h3>
                <p className="sec5-para2">
                  Brainwave is a cutting-edge UI/UX website created with
                  React.js and Tailwind CSS, showcasing contemporary design
                  principles. Its stylish appearance, smooth animations, and
                  exceptional user experience establish a benchmark, offering a
                  source of inspiration for future modern applications and
                  websites.
                </p>
                <div className="project-links">
                  <a
                    href="https://programmerowais.github.io/brainthunder/"
                    // href="https://programmerowais.github.io/agriculturecompany.github.io/"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site <span>&#62;</span>
                  </a>
                  <a
                    href="https://github.com/ProgrammerOwais/brainthunder"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code <span>&#62;</span>
                  </a>
                </div>
              </div>
              <img
                src={brainwavebg}
                alt="img"
                className="sec5-bgImg sec5-bgImg5"
              />
              <img src={brainwave} alt="img" className="sec5-img sec5-img5" />
            </div>
            <h3 className="heading3 sec5-heading3">BrainWave</h3>
          </div>
          <div className="sec5-col top sec5-col5">
            <div className="project-div">
              <div className="project-info">
                <h3 className="sec5-heading3-2">HooBank</h3>
                <p className="sec5-para2">
                  Hoobank is a cutting-edge UI/UX website created with React.js
                  and Tailwind CSS, showcasing contemporary design principles.
                  Its stylish appearance, smooth animations, and exceptional
                  user experience establish a benchmark, offering a source of
                  inspiration for future modern applications and websites.
                </p>
                <div className="project-links">
                  <a
                    href="https://programmerowais.github.io/hoobank/"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site <span>&#62;</span>
                  </a>
                  <a
                    href="https://github.com/ProgrammerOwais/hoobank"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code <span>&#62;</span>
                  </a>
                </div>
              </div>
              <img
                src={hoobankbg}
                alt="img"
                className="sec5-bgImg sec5-bgImg5"
              />
              <img src={hoobank} alt="img" className="sec5-img sec5-img5" />
            </div>
            <h3 className="heading3 sec5-heading3">HooBank</h3>
          </div>
          <div className="sec5-col top sec5-col3">
            <div className="project-div">
              <div className="project-info">
                <h3 className="sec5-heading3-2">TaskCollab</h3>
                <p className="sec5-para2">
                  Revolutionizing task management and collaboration with robust
                  authentication, chatting, and efficient project and task
                  oversight. Elevate teamwork and productivity with TaskCollab.
                </p>
                <div className="project-links">
                  <a
                    href="https://task-collab-github-io.vercel.app/"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site <span>&#62;</span>
                  </a>
                  <a
                    href="https://github.com/ProgrammerOwais/TaskCollab.github.io"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code <span>&#62;</span>
                  </a>
                </div>
              </div>
              <img
                src={taskcollab}
                alt="img"
                className="sec5-bgImg sec5-bgImg1"
              />
              <img src={taskcollab} alt="img" className="sec5-img" />
            </div>
            <h3 className="heading3 sec5-heading3">TaskCollab</h3>
          </div>
          <div className="sec5-col top sec5-col5">
            <div className="project-div">
              <div className="project-info">
                <h3 className="sec5-heading3-2">Agriculture Company</h3>
                <p className="sec5-para2">
                  This web is about the advertisement for an agriculture
                  company. This was a project given by one of my Upwork client.
                  This web contains a lot of functionality which you will really
                  like.
                </p>
                <div className="project-links">
                  <a
                    href="https://www.agcocorp.com/"
                    // href="https://programmerowais.github.io/agriculturecompany.github.io/"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site <span>&#62;</span>
                  </a>
                  <a
                    href="https://github.com/ProgrammerOwais/agriculturecompany.github.io"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code <span>&#62;</span>
                  </a>
                </div>
              </div>
              <img
                src={bgAgriculture}
                alt="img"
                className="sec5-bgImg sec5-bgImg5"
              />
              <img src={agriculture} alt="img" className="sec5-img sec5-img5" />
            </div>
            <h3 className="heading3 sec5-heading3">Agriculture Company</h3>
          </div>

          <div className="sec5-col top sec5-col4">
            <div className="project-div">
              <div className="project-info">
                <h3 className="sec5-heading3-2">E-commerce Product Page</h3>
                <p className="sec5-para2">
                  This web is about the selling advertisement for "Sneakers".
                  The page has an awesome layout. There are a lot of
                  functionalities on this page that is included with beautiful
                  animations i.e lightbox, carousel, gallery-carousel, etc.
                </p>
                <div className="project-links">
                  <a
                    href="https://programmerowais.github.io/EcommerceProductPage.github.io/"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site <span>&#62;</span>
                  </a>
                  <a
                    href="https://github.com/ProgrammerOwais/EcommerceProductPage.github.io/tree/main"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code <span>&#62;</span>
                  </a>
                </div>
              </div>
              <img src={bgeccomerce} alt="img" className="sec5-bgImg" />
              <img src={eccommerce} alt="img" className="sec5-img" />
            </div>
            <h3 className="heading3 sec5-heading3">E-commerce Product Page</h3>
          </div>
          <div className="sec5-col top sec5-col1">
            <div className="project-div">
              <div className="project-info">
                <h3 className="sec5-heading3-2">CandyCrush Game</h3>
                <p className="sec5-para2">
                  Developed an engaging Candy Crush-inspired game featuring
                  dynamic candy-matching mechanics. Players strategize to align
                  three identical candies vertically or horizontally, gaining
                  points and advancing through levels.
                </p>
                <div className="project-links">
                  <a
                    href="https://programmerowais.github.io/candy-crush.github.io/"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site <span>&#62;</span>
                  </a>
                  <a
                    href="https://github.com/ProgrammerOwais/candy-crush.github.io/tree/main"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code <span>&#62;</span>
                  </a>
                </div>
              </div>
              <img
                src={CandyCrush}
                alt="img"
                className="sec5-bgImg sec5-bgImg1"
              />
              <img src={CandyCrush} alt="img" className="sec5-img" />
            </div>
            <h3 className="heading3 sec5-heading3">CandyCrush Game</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
