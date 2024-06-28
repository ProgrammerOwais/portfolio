import upwork from "../assets/images/upwork.png";
import upworkIcon from "../assets/images/upworkIcon.png";
import mentor from "../assets/images/mentor.png";
import mentorIcon from "../assets/images/mentorIcon.png";
import codewar from "../assets/images/codewar.png";
import codewarIcon from "../assets/images/codewarIcon.png";
import xaans_logo from "../assets/images/xaans_logo.jpg";
import xaan from "../assets/images/xaan.jpg";

const Work = () => {
  return (
    <div className="work parent-container">
      <div className="sec6 sub-container">
        <h4 className="heading4 sec6-heading4">|| My Work</h4>
        <h2 className="heading2 sec6-heading2">Platforms I Worked</h2>
        <div className="sec6-parent-row">
          <div className="sec6-row top">
            <div className="sec6-col sec6-col1">
              <img src={xaan} alt="img" className="sec6-img" />
              <img src={xaans_logo} alt="img" className="sec6-img-icon" />
            </div>
            <div className="sec6-col sec6-col2">
              <h4 className="heading4 sec6-heading4-2">XAANS</h4>
              <h5 className="para2 sec6-para2">Software Company</h5>
              <p className="para2 sec6-para">
                Worked as a Frontend Developer at XAANS, leading the development
                of interactive and responsive web applications. Spearheaded
                multiple projects that enhanced user engagement and optimized
                performance.
              </p>
            </div>
            <div className="sec6-col sec6-col3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/xaans/mycompany/"
              >
                <button className="sec6-btn">
                  View Profile <span>&#62;&#62;</span>
                </button>
              </a>
            </div>
          </div>
          <div className="sec6-row top">
            <div className="sec6-col sec6-col1">
              <img src={mentor} alt="img" className="sec6-img" />
              <img src={mentorIcon} alt="img" className="sec6-img-icon" />
            </div>
            <div className="sec6-col sec6-col2">
              <h4 className="heading4 sec6-heading4-2">AGCO</h4>
              <h5 className="para2 sec6-para2">Agriculture Company</h5>
              <p className="para2 sec6-para">
                Worked as a Frontend Developer at AGCO, primarily focusing on
                converting designs into functional interfaces and managing
                frontend logic. Led the implementation of key projects, ensuring
                high-quality user experiences and efficient performance.
              </p>
            </div>
            <div className="sec6-col sec6-col3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.agcocorp.com/"
              >
                <button className="sec6-btn">
                  View Site <span>&#62;&#62;</span>
                </button>
              </a>
            </div>
          </div>
          <div className="sec6-row top">
            <div className="sec6-col sec6-col1">
              <img src={codewar} alt="img" className="sec6-img" />
              <img src={codewarIcon} alt="img" className="sec6-img-icon" />
            </div>
            <div className="sec6-col sec6-col2">
              <h4 className="heading4 sec6-heading4-2">Codewars</h4>
              <h5 className="para2 sec6-para2">Programmers Platform</h5>
              <p className="para2 sec6-para">
                The world's most advanced coding assessment platform for
                organizations looking to scale their hiring, upskilling, and
                certification programs. I did gain a lot of problem-solving
                experience here.
              </p>
            </div>
            <div className="sec6-col sec6-col3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.codewars.com/users/ProgrammerOwais"
              >
                <button className="sec6-btn">
                  View Profile <span>&#62;&#62;</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
