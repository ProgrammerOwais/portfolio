import download from "../assets/images/download.png";
import myResume from "../assets/others/resumes/Owias_Frontend_Resume.pdf";

const Experience = () => {
  return (
    <div className="experience parent-container">
      <div className="sec4 sub-container">
        <h4 className="heading4">|| My Experience</h4>
        <h2 className="heading2">My Work Experience</h2>
        <div className="sec4-row">
          <div className="sec4-col1">
            <div className="para-div">
              <p className="para">
                I am a professional front-end developer with over 2 years of
                experience in this field. My expertise includes front-end
                coding, thorough debugging, creative design implementation,
                seamless integration between front-end and back-end APIs, web
                optimization, and crafting SEO-focused content strategies
              </p>
              <p className="para">
                Throughout my career, I have developed strong skills in
                negotiating and understanding client requirements through clear
                and direct communication.
              </p>
            </div>
            <div className="resume-div sec4-resume">
              <a href={myResume} download="my resume">
                <div className="resume-bg"></div>
                <button className="resumeBtn">
                  <span>Get Resume</span>
                  <span>
                    <img
                      src={download}
                      alt="download"
                      className="download-icon"
                    />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="sec4-col2">
            <div className="progress-div">
              <h4 className="heading4 sec4-heading4">Communication</h4>
              <div className="progress  top">
                <span className="progress-value ">95%</span>
              </div>
            </div>
            <div className="progress-div">
              <h4 className="heading4 sec4-heading4">Problem Solving</h4>
              <div className="progress top">
                <span className="progress-value">90%</span>
              </div>
            </div>
            <div className="progress-div">
              <h4 className="heading4 sec4-heading4">Flexibility</h4>
              <div className="progress top">
                <span className="progress-value">90%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
