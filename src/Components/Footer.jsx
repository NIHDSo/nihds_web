import Logo from "../assets/nav_logo.png";
import socials from "../assets/react.svg";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={Logo} className="footer_logo" alt="Society Logo" />
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="#">Membership</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="#" className="social-icon">
              <img src={socials} alt="Facebook" />
            </a>
            <a href="https://x.com/Nihdc_NG" className="social-icon">
              <img src={socials} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/nigeria-innovative-hardware-development-society-nihds/"
              className="social-icon"
            >
              <img src={socials} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 NIHDS. All Rights Reserved.</p>
          <ul className="footer-legal">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
