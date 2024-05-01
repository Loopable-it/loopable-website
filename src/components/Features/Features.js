import { withTranslation } from "react-i18next";

import "./Features.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Features(props) {
    const { t } = props;
    const featuresList = [
        {
            icon: "fa-pen-nib",
            title: "Features_1_Title",
            subtitle: "Features_1_Subtitle"
        },
        {
            icon: "fa-bell",
            title: "Features_2_Title",
            subtitle: "Features_2_Subtitle"
        },
        {
            icon: "fa-star",
            title: "Features_3_Title",
            subtitle: "Features_3_Subtitle"
        }
    ];

    return (
        <div className="Features w-100 row mx-0" id="Benefits-section">
            <div className="mb-5">
                <p className="small-bold-text white-text p-0">
                    <span className="green-text">-</span> {t("Features_Section_Title")}
                </p>

                <h2 className="large-title white-text">
                    {t("Features_Title_1")}<br/>
                    <span className="green-text">{t("Features_Title_2")}</span>
                </h2>
            </div>
            {
                featuresList.map((item, index) => {
                    return (
                        <div className="col-12 col-md-4" key={index}>
                            <FontAwesomeIcon icon={`${item.icon}`} className=" green-text p-4 rounded-4" style={{fontSize: "25px", backgroundColor: "#F8F8F8"}}/>
                            <h3 className="medium-bold-text white-text my-3">{t(item.title)}</h3>
                            <p className="medium-text white-text">{t(item.subtitle)}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default withTranslation()(Features);