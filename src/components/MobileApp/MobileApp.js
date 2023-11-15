import { withTranslation } from "react-i18next";

import "./MobileApp.css";

function MobileApp(props) {
  const { t } = props;

  return (
    <div className="MobileApp w-100 mb-0 text-center" id="MobileApp-section">
      <h4 className="MobileApp-title mb-3">{t("MobileApp_Title")}</h4>

      <p>{t("MobileApp_Description")}</p>

      <div className="w-100"></div>

      <button
        className="Primary-button mb-5"
        onClick={() =>
          window.open("http://eepurl.com/iuaINI", "_blank", "noreferrer")
        }
      >
        {t("MobileApp_NewsletterSubscribe")}
      </button>
    </div>
  );
}

export default withTranslation()(MobileApp);
