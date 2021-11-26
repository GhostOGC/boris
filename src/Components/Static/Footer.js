import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div style={{ float: "right" }}>
        <Link className="header-logo-link" to="/">
          PROJECTS
        </Link>
        <Link className="header-logo-link" to="/bio">
          BIO
        </Link>
        <Link className="header-logo-link" to="/contacts">
          CONTACTS
        </Link>
      </div>
    </div>
  );
};
export default Footer;
