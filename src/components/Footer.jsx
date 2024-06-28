import logo from "../assets/images/logo.png";

const Footer = () => {
  let getYear = new Date().getFullYear();
  return (
    <footer className="footer parent-container">
      <div className="sec8 sub-container">
        <p className="foot-para">
          © {getYear} Created By 🤍 <span>Muhammad Owais</span>
        </p>
        <div className="foot-logo">
          {" "}
          <a href="/">
            {" "}
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
