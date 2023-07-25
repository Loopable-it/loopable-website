import { withTranslation } from "react-i18next";

import "./Features.css";

function Features(props) {
    const { t } = props;
    const featuresList = [
        {
            icon: "fa-solid fa-hand-holding-dollar",
            color: "#FB6107",
            key: "Earn"
        },
        {
            icon: "fa-solid fa-wallet",
            color: "#0EB1D2",
            key: "Rent"
        },
        {
            icon: "fa-solid fa-leaf",
            color: "#18CE40",
            key: "Share"
        }
    ];

    return (
        <div className="Features w-100 row mx-0 text-center d-flex align-items-center" id="features-section">
            {
                featuresList.map((item) => {
                    return (
                        <div className="col-12 col-md-4" key={item.key}>
                            <i className={`${item.icon} mb-3`} style={{color: item.color}}/>
                            <h3>{t(`Features_${item.key}`)}</h3>
                            <p>{t(`Features_${item.key}_Description`)}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default withTranslation()(Features);