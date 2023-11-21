import { withTranslation } from "react-i18next";

import serachImage from "../../assets/loopable-search-product.webp";
import priceImage from "../../assets/loopable-product-price.webp";

import "./HowItWorks.css";

function HowItWorks(props) {
    const { t } = props;

    const stepsList = [
        {
            icon: "fa-solid fa-magnifying-glass",
            title: "How_It_Works_Step_1_Title",
            subtitle: "How_It_Works_Step_1_Subtitle"
        },
        {
            icon: "fa-solid fa-thumbs-up",
            title: "How_It_Works_Step_2_Title",
            subtitle: "How_It_Works_Step_2_Subtitle"
        },
        {
            icon: "fa-solid fa-wand-magic-sparkles",
            title: "How_It_Works_Step_3_Title",
            subtitle: "How_It_Works_Step_3_Subtitle"
        },
    ];

    return (
        <div className="HowItWorks" id="How-it-works-section">
            <p className="small-bold-text grey-text text-center p-0">
                <span className="green-text">-</span> {t("How_It_Works_Section_Title")}
            </p>

            <h2 className="large-title grey-text text-center">
                {t("How_It_Works_Title_1")}<br/>
                <span className="green-text">{stepsList.length} {t("How_It_Works_Title_2")}</span>
            </h2>

            <div className="row mx-0 my-5">
                <div className="col-12 col-md-6 px-0 bg-secondary">
                    
                </div>

                <div className="col-12 col-md-6 px-0">
                    {
                        stepsList.map((item, index) => {
                            let iconStyle = index !== stepsList.length - 1 ? 
                                "grey-text bg-body-secondary bg-opacity-75" : 
                                "green-text light-green-bg"
                            
                            let textStyle = index !== stepsList.length - 1 ? 
                                "grey-text" : 
                                "green-text"    
                            return (
                                <div className="row mx-0 mb-5" key={index}>
                                    <div className="col-auto mb-3 mb-sm-0">
                                        <i className={`${item.icon} ${iconStyle} p-4 rounded-circle`} style={{fontSize: "25px"}}></i>
                                    </div>
                                    <div className="col align-self-center">
                                        <h3 className={`medium-bold-text ${textStyle} m-0`}>{t(item.title)}</h3>
                                        <p className={`medium-text ${textStyle} m-0`}>{t(item.subtitle)}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <h2 className="large-title grey-text text-center">
                <span className="green-text">{t("How_It_Works_Title_3")}</span> {t("How_It_Works_Title_4")}
            </h2>

            <div className="row mx-0 my-5 text-center">
                <div className="col-12 col-sm mb-4 mb-sm-0">
                    <div className="bg-white rounded-4 px-3 pt-3">
                        <h3 className="medium-bold-text grey-text">{t("How_It_Works_Feature_1_Title")}</h3>
                        <p className="medium-text grey-text">{t("How_It_Works_Feature_1_Subtitle")}</p>
                        <img src={serachImage} alt="Ricerca oggetti loopable" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-12 col-sm mb-4 mb-sm-0">
                    <div className="bg-white rounded-4 px-3 pb-3">
                        <img src={priceImage} alt="Prezzi loopable" className="img-fluid"/>
                        <h3 className="medium-bold-text grey-text">{t("How_It_Works_Feature_2_Title")}</h3>
                        <p className="medium-text grey-text">{t("How_It_Works_Feature_2_Subtitle")}</p>
                    </div>
                </div>
                <div className="col-12 col-sm">
                    <div className="bg-white rounded-4 px-3 pt-3">
                        <h3 className="medium-bold-text grey-text">{t("How_It_Works_Feature_3_Title")}</h3>
                        <p className="medium-text grey-text">{t("How_It_Works_Feature_3_Subtitle")}</p>
                        <img src={serachImage} alt="Gestione noleggi loopable" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(HowItWorks);