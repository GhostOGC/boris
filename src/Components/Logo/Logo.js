import { Component } from "react";
import mainLogo from "./Main-Logo.png";
import mobileLogo from "./Mobile-Logo.png";

class Logo extends Component {
  state = {
    logo: mainLogo,
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    if (window.innerWidth < 1025) {
      this.setState({ logo: mobileLogo });
    } else {
      this.setState({ logo: mainLogo });
    }
  };
  render() {
    return <img className="main-logo" alt="Main Logo" src={this.state.logo} />;
  }
}
export default Logo;
