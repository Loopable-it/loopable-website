import { withTranslation } from "react-i18next";

import "./MobileApp.css";

function MobileApp(props) {
  const { t } = props;

  return (
    <div className="Features w-100 row mx-0">
      <div className="col-12 col-sm mb-5">
          <p className="small-bold-text white-text p-0">
              <span className="green-text">-</span> {t("Mobile_App_Section_Title")}
          </p>

          <h2 className="large-title white-text">
            {t("Mobile_App_Title_1")}<br/>
              <span className="green-text">{t("Mobile_App_Title_2")}</span>
          </h2>

          <p className="medium-text white-text pe-5">
            {t("Mobile_Not_Available")}
          </p>

          <button
            className="green-button"
            onClick={() =>
              window.open("http://eepurl.com/iuaINI", "_blank", "noreferrer")
            }>
            {t("Newsletter_Subscribe")}
          </button>
      </div>

      <div className="col-12 col-sm mb-5">
        <div className="bg-white bg-opacity-50 rounded-4 p-4">
          <i className="fa-brands fa-apple mb-5" style={{fontSize: "30px"}}></i>
          <p className="medium-bold-text white-text mt-5">Loopable on iOS</p>
          <p className="medium-text white-text">Available before summer 2024</p>
          <button
            className="green-button"
            disabled={true}
          >
            {t("Mobile_App_Download")}
          </button>
        </div>
      </div>
      <div className="col-12 col-sm mb-5">
        <div className="bg-white bg-opacity-50 rounded-4 p-4">
          <i className="fa-brands fa-android mb-5" style={{fontSize: "30px"}}></i>
          <p className="medium-bold-text white-text mt-5">Loopable on Android</p>
          <p className="medium-text white-text">Availbale by the end of 2024</p>
          <button
            className="green-button"
            disabled={true}
          >
            {t("Mobile_App_Download")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(MobileApp);
