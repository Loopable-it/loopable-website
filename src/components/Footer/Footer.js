import { withTranslation } from "react-i18next";
import { scrollDownToTarget } from "../../utilities/functionalities";

import logo from "../../assets/loopable-logo-white.svg";
import "./Footer.css";

function Footer(props) {
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

  const contactList = [
    "www.loopable.it",
    "info@loopable.it"
  ];

  const onLanguageChanged = ({ currentTarget }) => {
    const language = currentTarget.value;
    props.i18n.changeLanguage(language);
  };

  const isLanguageSelected = (language) => {
    return props.i18n.language === language ? "small-bold-text grey-text" : "small-text white-text";
  };

  const _scrollDownToTarget = scrollDownToTarget;

  return (
    <div className="Footer w-100">
      <div className="row mx-0 d-flex justify-content-center justify-content-md-between">
        <div className="col-12 text-center mb-3 col-md-2 text-md-start mb-md-0">
          <img src={logo} alt="Logo Loopable" className="Footer-logo mb-2" />
          <p className="small-text white-text">
            {t("Hero_Description")}
          </p>
          <a href="https://www.linkedin.com/company/loopable-it"
            target="_blank"
            rel="noreferrer">
            <i className="fa-brands fa-linkedin green-text bg-white bg-opacity-50 p-2 rounded-circle me-2" style={{fontSize: "20px"}}></i>
          </a>
          <a href="https://github.com/Loopable-it"
            target="_blank"
            rel="noreferrer">
            <i className="fa-brands fa-github green-text bg-white bg-opacity-50 p-2 rounded-circle" style={{fontSize: "20px"}}></i>
          </a>
        </div>

        <div className="col-auto d-none d-md-block"></div>

        <div className="col-12 text-center mb-3 col-md-2 text-md-start mb-md-0">
          <p className="medium-bold-text white-text m-0 mb-sm-2">{t("Footer_Company")}</p>
          <ul>
            {routesList.map((item, index) => {
              return (
                <li key={index}>
                  <button
                    className="transparent-button"
                    onClick={() => _scrollDownToTarget(item.route)}>
                    <p className="small-text white-text m-0">{t(item.name)}</p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-12 text-center mb-3 col-md-2 text-md-start mb-md-0">
          <p className="medium-bold-text white-text m-0 mb-sm-2">{t("Footer_Contacts")}</p>
          <ul>
            {contactList.map((item, index) => {
              return (
                <li key={index}>
                  <p className="small-text white-text m-0">{item}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-12 text-center mb-3 col-md-2 text-md-start mb-md-0">
          <p className="medium-bold-text white-text">{t("Footer_Subscribe")}</p>
          <button
            className="grey-button"
            onClick={() =>
              window.open("http://eepurl.com/iuaINI", "_blank", "noreferrer")
            }>
            {t("Newsletter_Subscribe")}
          </button>
        </div>
      </div>

      <div className="row mx-3 mt-5" style={{borderTop: "2px solid #FFF"}}>
        <div className="col-12 col-sm mt-3">
          <p className="small-text white-text text-center text-sm-start">{t("Footer_Note")}</p>
        </div>

        <div className="col-12 col-sm-auto text-center text-sm-start mt-3">
          <button
            className="transparent-button"
            value="en"
            onClick={(value) => onLanguageChanged(value)}
          >
            <p className={`${isLanguageSelected("en")} m-0`}>EN</p>
          </button>

          <button
            className="transparent-button"
            value="it"
            onClick={(value) => onLanguageChanged(value)}
          >
            <p className={`${isLanguageSelected("it")} m-0`}>IT</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Footer);
