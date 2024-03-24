import { withTranslation } from "react-i18next";

import radio from "../../assets/radio-105.png";
import stroke from "../../assets/stroke.svg";

import "./InTheMedia.css";

function InTheMedia(props) {
    const { t } = props;

    const switchMediaType = (type) => {
        switch (type) {
            case "Interview":
                return (
                    <span className="small-bold-text green-text bg-light-green rounded-3 py-1 px-2">
                        <i className="fa-solid fa-microphone-lines me-2"></i> {t("In_The_Media_Interview_Type")}
                    </span>
                );
            default:
                break;
        }
    };

    const mediaArticles = [
        {
            type: "Interview",
            image: radio,
            name: "105 STARTUP",
            by: "Radio 105",
            at: new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "2-digit"}).format(new Date(2024, 2, 16)),
            link: "https://www.105.net/audio/105-start-up/1365781/hai-perso-105-startup-riascolta-la-storia-di-mattia-cintura-co-founder-di-loopable.html"
        },
    ];

    return (
        <div className="InTheMedia w-100 row mx-0 justify-content-center">
            <h2 className="large-title grey-text text-center">
                {t("In_The_Media_Title_1")}
                <span className="green-text">{t("In_The_Media_Title_2")}</span>
            </h2>

            <div className="col-1 d-none d-md-flex align-items-start">
                <img src={stroke} alt="" className="img-fluid"/>
            </div>

            {
                mediaArticles.map((item, index) => {
                    return (
                        <div className="col-12 col-sm-auto d-flex justify-content-center mt-4 mb-sm-0" key={index} style={{cursor: "pointer"}}>
                            <div className="Media-card bg-white rounded-4" onClick={() => window.open(item.link, "_blank", "noreferrer")}>
                                <img src={item.image} alt={item.name} className="img-fluid rounded-top-4"/>
                                <div className="p-3">
                                    {switchMediaType(item.type)}
                                    <h3 className="small-title grey-text mt-3 mb-sm-0">
                                        {item.name}
                                    </h3>
                                    <div className="small-text grey-text mt-3">
                                        <span className="me-2">
                                            <i className="fa-solid fa-newspaper green-text me-2"></i> {item.by}
                                        </span>
                                        <span className="ms-2">
                                            <i className="fa-solid fa-calendar-day green-text me-2"></i> {item.at}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }

            <div className="col-1 d-none d-md-flex align-items-end">
                <img src={stroke} alt="" className="img-fluid" style={{rotate: "180deg"}}/>
            </div>
        </div>
    );
}

export default withTranslation()(InTheMedia);