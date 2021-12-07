import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavigationModal from "../NavigationModal/NavigationModal";

const Header = () => {
  const [open, setOpen] = useState(false);

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
          <i onClick={() => setOpen(true)} className="fas fa-bars nav-item" />
        </span>
      </div>

      {open ? <NavigationModal setOpen={setOpen} /> : null}
    </div>
  );
};
export default Header;
