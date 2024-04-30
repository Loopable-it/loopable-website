import { withTranslation } from "react-i18next";

import mockup from "../../assets/loopable-ios-app.webp";

import "./Hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Hero(props) {
    const { t } = props;

    return (
        <div className="Hero w-100" id="Home-section">
            <div className="Hero-container row mx-0">
                <div className="col-12 col-md-6 px-0 align-self-center mt-5 mt-md-0">
                    <span className="small-title bg-white rounded-3 py-2 px-3">
                    <FontAwesomeIcon icon="star" className="me-2 star-icon" style={{color: '#18ce40'}} />
                        {t("Hero_Badge")}
                    </span>

                    <h1 className="extra-large-title my-4">
                        {t("Hero_Title_1")}<br/>
                        <span className="green-text">{t("Hero_Title_2")}</span>
                    </h1>

                    <h2 className="medium-text grey-text p-0">
                        {t("Hero_Description")}
                    </h2>
                </div>

                <div className="col-12 col-md-6 p-0 align-self-end">
                    <img src={mockup} alt="Loopable iOS app" className="img-fluid m-0"/>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(Hero);