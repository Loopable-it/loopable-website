import { withTranslation } from "react-i18next";

import "./Business.css";

function Business(props) {
    const { t } = props;
    const featuresList = [
        {
            icon: "fa-solid fa-rectangle-ad",
            title: "Business_Features_1_Title",
            subtitle: "Business_Features_1_Subtitle"
        },
        {
            icon: "fa-solid fa-list-check",
            title: "Business_Features_2_Title",
            subtitle: "Business_Features_2_Subtitle"
        },
        {
            icon: "fa-solid fa-arrow-up-right-dots",
            title: "Business_Features_3_Title",
            subtitle: "Business_Features_3_Subtitle"
        }
    ];

    return (
        <div className="Business w-100 row mx-0" id="Business-section">
            <div className="mb-5 d-flex justify-content-start justify-sm-content-around">
                <div className="m-0">
                    <p className="small-bold-text white-text p-0">
                        <span className="grey-text">-</span> {t("Business_Section_Title")}
                    </p>

                    <h2 className="large-title white-text">
                        {t("Business_Title_1")}<br/>
                        <span className="grey-text">{t("Business_Title_2")}</span>
                    </h2>
                </div>

                <button className="grey-button d-none" disabled={true}>
                    {t("Business_Enroll")}
                </button>
            </div>
            {
                featuresList.map((item, index) => {
                    return (
                        <div className="col-12 col-md-4" key={index}>
                            <i className={`${item.icon} grey-text p-4 rounded-4`} style={{fontSize: "25px", backgroundColor: "#F8F8F8"}}></i>
                            <h3 className="medium-bold-text white-text my-3">{t(item.title)}</h3>
                            <p className="medium-text white-text">{t(item.subtitle)}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default withTranslation()(Business);