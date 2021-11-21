import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Projects</Link>
      <Link to="/bio">Bio</Link>
      <Link to="/contacts">Contacts</Link>
    </div>
  );
};
export default Header;
