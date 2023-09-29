import { Link } from "react-router-dom";
import Logo from "../assets/nav_logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="nav_bar">
        <img className="nav_logo" src={Logo} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
