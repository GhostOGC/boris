import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

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
          <i onClick={() => setOpen(true)} className="fas fa-bars" />
        </span>
      </div>
      <Modal show={open} fullscreen={true} contentClassName="modal-container">
        <div style={{ height: "100%" }} onClick={() => setOpen(false)}></div>
      </Modal>
    </div>
  );
};
export default Header;
