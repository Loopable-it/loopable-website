import { withTranslation } from "react-i18next";

import whatIs from "../../assets/what-is.png";
import whyShould from "../../assets/why-should.png";
import how from "../../assets/how.png";
import "./Questions.css";

function Questions(props) {
    const { t } = props;

    return (
        <div className="Questions w-100 my-4">
            <div className="Questions-card row mx-0 d-flex align-items-center mb-5">
                <div className="col-12 col-md-6 text-center text-md-start">
                    <h2>{t("Question_WhatIs")}</h2>
                    <p>{t("Question_WhatIs_Answer")}</p>
                </div>
                <div className="d-flex col-12 order-first justify-content-center col-md-6 order-md-last justify-content-md-end">
                      <img src={whatIs} alt="" class="img-fluid"/>
                </div>
            </div>
            <div className="Questions-card row mx-0 d-flex align-items-center mb-5">
                <div className="d-flex col-12 justify-content-center col-md-6 justify-content-md-start">
                      <img src={whyShould} alt="" />
                </div>
                <div className="col-12 col-md-6 text-center text-md-start">
                    <h2>{t("Question_Earn")}</h2>
                    <p>{t("Question_Earn_Answer")}</p>
                </div>
            </div>
            <div className="Questions-card row mx-0 d-flex align-items-center mb-5">
                <div className="col-12 col-md-6 text-center text-md-start">
                    <h2>{t("Question_Possibilities")}</h2>
                    <p>{t("Question_Possibilities_Answer")}</p>
                </div>
                <div className="d-flex col-12 order-first justify-content-center col-md-6 order-md-last justify-content-md-end">
                      <img src={how} alt="" />
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(Questions);