import { withTranslation } from "react-i18next";

import mockup from "../../assets/mockup_3.png";
import "./Download.css";

function Download(props) {
    const { t } = props;

    return (
        <div className="Download w-100 mb-0 text-center">
            <h4 className="Download-title mb-5">
                {t("Download_Title")}
            </h4>

            <input className="Email-form mb-3" placeholder={t("Download_Email_Placeholder")} type="email" size="30" />

            <div className="w-100"></div>

            <button className="Primary-button mb-5">
                {t("Shared_NotifyMe")}
            </button>

            <div className="w-100"></div>

            <img src={mockup} alt="" />
        </div>
    );
}

export default withTranslation()(Download);