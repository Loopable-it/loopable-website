import { withTranslation } from "react-i18next";

import logoBusiness from "../../assets/logo-business.svg";
import "./Business.css";

function Business(props) {
    const { t } = props;
    const cardContent = [
        {
            icon: "fa-solid fa-rectangle-ad",
            key: "Promote"
        },
        {
            icon: "fa-solid fa-list-check",
            key: "Manage"
        },
        {
            icon: "fa-solid fa-chart-line",
            key: "Rent"
        }
    ];

    return (
        <div className="Business w-100 mb-0 text-center">
            <img src={logoBusiness} alt="Logo Loopable business" className="Business-logo"/>

            <p className="w-100 w-sm-75 my-4 mx-auto">{t("Business_Description")}</p>

            <div className="row mx-0 d-flex justify-content-around">
                {
                    cardContent.map((item) => {
                        return (
                            <div className="Business-card p-3 mb-3 mb-sm-0 col-12 col-sm-4">
                                <i className={item.icon}></i>
                                <h5 className="mt-3">{t(`Business_${item.key}`)}</h5>
                                <p className="mx-sm-5">{t(`Business_${item.key}_Description`)}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default withTranslation()(Business);