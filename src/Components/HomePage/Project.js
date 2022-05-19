import { Component } from "react";
import "./Projects.css";
import Logo from "../../Media/Icons/play-button.png";
import ReactPlayerModal from "../Player/PlayerModal";
class Project extends Component {
  state = {
    open: false,
  };
  render = () => {
    const { classNames, img, title, link } = this.props.data;

    return (
      <div
        className={`parallax project ${classNames ? classNames : ""}`}
        style={{ backgroundImage: `url(${img})` }}
      >
        <img
          src={Logo}
          className="play-btn"
          alt="missing"
          onClick={() => this.setState({ open: !this.state.open })}
        />
        <h1>
          <a href={link} className="project-title">
            {title}
          </a>
        </h1>
        {this.state.open && (
          <ReactPlayerModal
            url={link}
            onClose={() => this.setState({ open: false })}
          />
        )}
      </div>
    );
  };
}

export default Project;
