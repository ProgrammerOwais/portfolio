import myImg from "../assets/images/owaisimgbgrm.png";
import download from "../assets/images/download.png";
import myResume from "../assets/others/resumes/Owias_Frontend_Resume.pdf";

const Mainsec = () => {
  return (
    <div className="hero-sec parent-container" id="home-sec">
      <div className="sec1 sub-container">
        <div className="sec1-col1">
          <img src={myImg} alt="owaisImg" className="mainImg" />
        </div>
        <div className="sec1-col2">
          <h1 className="heading1">Hi I'm Muhammad Owais</h1>
          <h3 className="heading3">Frontend Web Developer</h3>
          <div className="resume-div">
            <a href={myResume} download="owais_resume">
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
      </div>
    </div>
  );
};

export default Mainsec;
