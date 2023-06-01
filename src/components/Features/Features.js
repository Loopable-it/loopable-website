import { withTranslation } from "react-i18next";

import "./Features.css";

function Features(props) {
    const { t } = props;

    return (
        <div className="Features w-100 row mx-0 text-center d-flex align-items-center">
            <div className="col-12 col-sm-4">
                <i class="fa-solid fa-hand-holding-dollar mb-3" style={{color: "#FB6107"}}/>
                <h3>{t("Features_Earn")}</h3>
                <p>{t("Features_Earn_Description")}</p>
            </div>
            <div className="col-12 col-sm-4">
                <i class="fa-solid fa-wallet mb-3" style={{color: "#0EB1D2"}}/>
                <h3>{t("Features_Rent")}</h3>
                <p>{t("Features_Rent_Description")}</p>
            </div>
            <div className="col-12 col-sm-4">
                <i class="fa-solid fa-leaf mb-3" style={{color: "#18CE40"}}/>
                <h3>{t("Features_Share")}</h3>
                <p>{t("Features_Share_Description")}</p>
            </div>
        </div>
    );
}

export default withTranslation()(Features);