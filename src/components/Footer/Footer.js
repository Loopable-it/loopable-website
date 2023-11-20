import { withTranslation } from "react-i18next";

import logo from "../../assets/loopable-logo-white.svg";
import "./Footer.css";

function Footer(props) {
  const { t } = props;

  const routesList = [
    "Header_Menu_Home",
    "Header_Menu_Benefits",
    "Header_Menu_How_it_works",
    "Header_Menu_Business",
    "Header_Menu_About_us",
    "Header_Menu_FAQ",
  ];

  const contactList = [
    "www.loopable.it",
    "info@loopable.it"
  ];

  return (
    <div className="Footer w-100">
      <div className="row mx-5 d-flex justify-content-center justify-content-md-between">
        <div className="col-12 text-center mb-3 col-md-2 text-md-start mb-md-0">
          <img src={logo} alt="Logo Loopable" className="Footer-logo mb-2" />
          <p className="small-text white-text">
            {t("Hero_Description")}
          </p>
        </div>

        <div className="col-auto d-none d-md-block"></div>

        <div className="col-12 text-center mb-3 col-md-2 text-md-start mb-md-0">
          <p className="medium-bold-text white-text m-0 mb-sm-2">{t("Footer_Company")}</p>
          <ul>
            {routesList.map((item, index) => {
              return (
                <li key={index}>
                  <p className="small-text white-text m-0">{t(item)}</p>
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

      <div className="row mx-5 mt-5" style={{borderTop: "2px solid #FFF"}}>
          <p className="small-text white-text mt-3">{t("Footer_Note")}</p>
      </div>
    </div>
  );
}

export default withTranslation()(Footer);
