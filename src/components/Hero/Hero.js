import { withTranslation } from "react-i18next";

import mockup from "../../assets/loopable-ios-app.webp";

import "./Hero.css";

function Hero(props) {
    const { t } = props;

    return (
        <div className="Hero w-100">
            <div className="Hero-container row mx-0">
                <div className="col-12 col-md-6 px-0 align-self-center mt-5 mt-sm-0">
                    <span className="small-title bg-white rounded-3 py-2 px-3">
                        <i class="fa-solid fa-star me-2" style={{color: '#18ce40'}}></i>
                        {t("Hero_Badge")}
                    </span>

                    <h1 className="extra-large-title my-4">
                        {t("Hero_Title_1")}<br/>
                        <span className="green-text">{t("Hero_Title_2")}</span>
                    </h1>

                    <p className="medium-text grey-text p-0">
                        {t("Hero_Description")}
                    </p>
                </div>

                <div className="col-12 col-md-6 p-0 align-self-end">
                    <img src={mockup} alt="Loopable iOS app" className="img-fluid m-0"/>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(Hero);