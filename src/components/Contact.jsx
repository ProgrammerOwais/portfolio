import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact parent-container" id="contact-sec">
      <div className="sec7 sub-container">
        <h4 className="heading4 sec6-heading4">|| Get In Touch</h4>
        <div className="sec7-row">
          <div className="sec7-col sec7-col1">
            <div className="div1">
              <h5 className="sec7-heading5">Phone</h5>
              <h5 className="sec7-heading5">+92 3404021737</h5>
            </div>
            <div className="div1">
              <h5 className="sec7-heading5">Email</h5>
              <h5 className="sec7-heading5">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.owaistag@gmail.com"
                >
                  owaistag@gmail.com
                </a>
              </h5>
            </div>
            <div className="div1">
              <h5 className="sec7-heading5">Github</h5>
              <h5 className="sec7-heading5">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ProgrammerOwais"
                >
                  ProgrammerOwais
                </a>
              </h5>
            </div>
            <div className="div1">
              <h5 className="sec7-heading5-2">Follow Me</h5>
              <div className="links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/muhammad-owais-45b03822b/"
                  className="contact-link"
                >
                  <FaLinkedin className="contact-icon"></FaLinkedin>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/profile.php?id=100057764270618"
                  className="contact-link"
                >
                  <FaFacebookF className="contact-icon"></FaFacebookF>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/programmerowais"
                  className="contact-link"
                >
                  <FaInstagram className="contact-icon"></FaInstagram>
                </a>
              </div>
            </div>
          </div>
          <div className="sec7-col sec7-col2">
            <h2 className="heading2 sec7-heading2">Wanna say hello to me</h2>
            <form
              className="form"
              action="https://formsubmit.co/owaisxeon@gmail.com"
              method="POST"
            >
              <input
                type="text"
                placeholder="Name"
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input"
                required
              />
              <input
                type="number"
                placeholder="Phone"
                className="form-input"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="form-input"
                required
              />
              <textarea
                required
                name="comment"
                id="comment"
                placeholder="Comment"
                cols="30"
                rows="10"
                className="textarea"
              ></textarea>
              <div className="resume-div">
                <input
                  type="submit"
                  className="submit-msg resumeBtn"
                  value={"Submit Message"}
                />
                <div className="resume-bg"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
