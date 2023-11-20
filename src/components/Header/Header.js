import { withTranslation } from "react-i18next";
import { scrollDownToTarget } from "../../utilities/functionalities";

import logo from "../../assets/loopable-logo.svg";
import "./Header.css";

function Header(props) {
  const { t } = props;
  const routesList = [
    "Header_Menu_Home",
    "Header_Menu_Benefits",
    "Header_Menu_How_it_works",
    "Header_Menu_Business",
    "Header_Menu_About_us",
    "Header_Menu_FAQ",
  ];

  const _scrollDownToTarget = scrollDownToTarget;

  return (
    <nav className="Header navbar">
      <a className="mx-0" href="/">
        <img src={logo} alt="Logo Loopable" className="Header-logo" />
      </a>

      <div className="d-none d-lg-flex justify-content-center align-items-center">
        {
          routesList.map((item, index) => {
            return (
              <p className="small-bold-text grey-text mx-3 mb-0" key={index}>
                {t(item)}
              </p>
            )
          })
        }
        <p className="small-bold-text grey-text mx-3 mb-0"></p>
      </div>

      <div className="d-flex justify-content-evenly">
        <button
          className="green-button d-none d-lg-inline"
          onClick={() => _scrollDownToTarget("MobileApp-section")}
        >
          {t("Header_Get_app")}
        </button>
      </div>
    </nav>
  );
}

export default withTranslation()(Header);
