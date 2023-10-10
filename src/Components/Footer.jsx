import Logo from "../assets/nav_logo.png";
import iglogo from "../assets/ig-logo.png";
import twlogo from "../assets/tw-logo.png";
import lilogo from "../assets/li-logo.png";

{
  /* <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">
  Instagram icons created by edt.im - Flaticon
</a>; */
}

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
                <a href="/">Home</a>
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
            <a
              href="https://www.linkedin.com/company/nigeria-innovative-hardware-development-society-nihds/"
              className="social-icon"
            >
              <img src={lilogo} alt="LinkedIn" width={35} />
            </a>
            <a href="https://x.com/Nihdc_NG" className="social-icon">
              <img src={twlogo} alt="Twitter" width={35} />
            </a>
            <a href="https://instagram.com/nihds_ng" className="social-icon">
              <img src={iglogo} alt="Instagram" width={35} />
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
