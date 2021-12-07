import { Link } from "react-router-dom";

const NavigationModal = ({ setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="modal-container">
      <div className="modal-exit-icon">
        <i onClick={handleClose} class="fas fa-times" />
      </div>
      <div className="modal-navigation-container">
        <Link className=" modal-navigation-item" to="/" onClick={handleClose}>
          projects
        </Link>
        <Link className="modal-navigation-item" to="/bio" onClick={handleClose}>
          bio
        </Link>
        <Link
          className="modal-navigation-item"
          to="/contacts"
          onClick={handleClose}
        >
          contacts
        </Link>
      </div>
    </div>
  );
};

export default NavigationModal;
