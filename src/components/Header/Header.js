import { withTranslation } from "react-i18next";
import { scrollDownToTarget } from "../../utilities/functionalities";

import logo from "../../assets/loopable-logo.svg";
import "./Header.css";

function Header(props) {
  const { t } = props;
  const routesList = [
    {
      name: "Header_Menu_Home",
      route: "Home-section"
    },
    {
      name: "Header_Menu_Benefits",
      route: "Benefits-section"
    },
    {
      name: "Header_Menu_How_it_works",
      route: "How-it-works-section"
    },
    {
      name: "Header_Menu_Business",
      route: "Business-section"
    },
    {
      name: "Header_Menu_About_us",
      route: "About-us-section"
    },
    {
      name: "Header_Menu_FAQ",
      route: "FAQ-section"
    }
  ];

  const onLanguageChanged = ({ currentTarget }) => {
    const language = currentTarget.value;
    props.i18n.changeLanguage(language);
  };

  const isLanguageSelected = (language) => {
    return props.i18n.language === language ? "small-bold-text grey-text" : "small-text grey-text";
  };

  const _scrollDownToTarget = scrollDownToTarget;

  return (
    <nav className="Header navbar">
      <a className="mx-0" href="/">
        <img src={logo} alt="Logo Loopable" className="Header-logo" />
      </a>

      <div className="d-none d-xl-flex justify-xl-content-center align-xl-items-center">
        {
          routesList.map((item, index) => {
            return (
              <button
                key={index}
                className="transparent-button"
                onClick={() => _scrollDownToTarget(item.route)}>
                <p className="Header-underline-animation small-bold-text grey-text mx-3 mb-0" key={index}>
                  {t(item.name)}
                </p>
              </button>
            )
          })
        }
      </div>

      <div className="d-flex justify-content-evenly">
        <button
          className="transparent-button"
          value="en"
          onClick={(value) => onLanguageChanged(value)}
        >
          <p className={`${isLanguageSelected("en")} m-0`}>EN</p>
        </button>

        <button
          className="transparent-button me-0 me-lg-3"
          value="it"
          onClick={(value) => onLanguageChanged(value)}
        >
          <p className={`${isLanguageSelected("it")} m-0`}>IT</p>
        </button>

        <button
          className="green-button d-none d-lg-inline"
          onClick={() => _scrollDownToTarget("MobileApp-section")}>
          {t("Header_Get_app")}
        </button>
      </div>
    </nav>
  );
}

export default withTranslation()(Header);
