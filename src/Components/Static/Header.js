import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className="header">
      <Link className="header-logo-link" to="/">
        <Logo />
      </Link>

      <div className="main-nav-wrapper">
        <div className="social-wrapper">
          <a className="social-item " href="https://vimeo.com/kalaidjiev">
            <i className="fab fa-vimeo-square grey-hover" />
          </a>
          <a
            className="social-item "
            href="https://www.instagram.com/b.kalaidjiev/"
          >
            <i className="fab fa-instagram-square grey-hover" />
          </a>
        </div>
        <span>
          <i onClick={() => console.log("clicked")} className="fas fa-bars" />
        </span>
      </div>
    </div>
  );
};
export default Header;
