import { withTranslation } from "react-i18next";
import { scrollDownToTarget } from "../../utilities/functionalities";

import logo from "../../assets/logo.svg";
import "./Header.css";

function Header(props) {
  const { t } = props;

  const _scrollDownToTarget = scrollDownToTarget;

  return (
    <nav className="Header navbar">
      <a className="mx-0" href="/">
        <img src={logo} alt="Logo Loopable" className="Header-logo" />
      </a>

      <div className="d-none d-sm-flex justify-content-center align-items-center">
        <p className="small-bold-text mx-3 mb-0">Home</p>
        <p className="small-bold-text mx-3 mb-0">Benefits</p>
        <p className="small-bold-text mx-3 mb-0">How it works</p>
        <p className="small-bold-text mx-3 mb-0">Business</p>
        <p className="small-bold-text mx-3 mb-0">About us</p>
        <p className="small-bold-text mx-3 mb-0">FAQ</p>
      </div>

      <div className="d-flex justify-content-evenly">
        <button
          className="green-button d-none d-sm-inline me-5"
          onClick={() => _scrollDownToTarget("MobileApp-section")}
        >
          Get the app
        </button>
      </div>
    </nav>
  );
}

export default withTranslation()(Header);
