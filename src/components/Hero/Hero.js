import { withTranslation } from "react-i18next";
import { scrollDownToTarget } from "../../utilities/functionalities";

import singleMockup from "../../assets/hero-single-mockup.png";
import doubleMockup from "../../assets/hero-double-mockup.png";
import "./Hero.css";

function Hero(props) {
    const { t } = props;

    const _scrollDownToTarget = scrollDownToTarget;

    return (
        <div className="Hero w-100">
            <div className="Hero-container row mx-0 d-flex align-items-center">
                <div className="col-12 col-sm-6 px-0">
                    <h1 className="mb-5">
                        {t("Hero_Title")}
                    </h1>
                    <p className="mb-5">
                        {t("Hero_Description")}
                    </p>
                    <button className="Secondary-button" onClick={() => _scrollDownToTarget("features-section")}>
                        {t("Shared_LearnMore")}
                    </button>
                </div>

                <div className="col-12 col-sm-6 px-0 d-flex align-items-start mb-5">
                    <img src={singleMockup}
                        alt="An iPhone showing the homepage of the Loopable app"
                        className="d-none d-md-block"/>
                    <img src={doubleMockup}
                        alt="Two iPhone showing the homepage and the search result of the Loopable app"
                        className="Hero-mockup d-block d-md-none"/>
                </div>

                <div className="d-block d-md-none col-12 px-0 d-flex align-items-start justify-content-center">
                    <i className="fa-solid fa-chevron-down" style={{fontSize: "2rem"}}></i>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(Hero);