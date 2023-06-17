import { withTranslation } from "react-i18next";

import logo from "../../assets/logo.svg";
import "./Footer.css";

function Footer(props) {
    const { t } = props;
    const contactList = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/company/loopable-it",
            icon: "fa-linkedin"
        }
    ];
    return (
        <>
            <div className="Footer w-100">
                <div className="row mx-0 d-flex justify-content-center justify-content-sm-between">
                    <div className="col-auto text-center mb-3 col-sm-2 text-sm-start mb-sm-0">
                        <img src={logo} alt="Logo Loopable" className="Footer-logo mb-2" />
                        <h6>
                            {t("Footer_Description")}
                        </h6>
                    </div>

                    <div className="col-auto d-none d-sm-block"></div>

                    <div className="col-auto text-center mb-3 col-sm-2 text-sm-start mb-sm-0">
                        <h5>{t("Footer_FollowUs")}</h5>
                        <ul>
                            {
                                contactList.map((item) => {
                                    return (
                                        <li>
                                            <a className="Footer-link" href={item.link} target="_blank" rel="noreferrer">
                                                <span>
                                                    <i className={`fa-brands ${item.icon} me-2`}></i>
                                                    {item.name}
                                                </span>
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="Footer-link col-auto text-center mb-3 col-sm-2 text-sm-start mb-sm-0">
                        <h5>{t("Footer_DownloadApp")}</h5>
                        <ul>
                            <li>
                                <span>
                                    <i className="fa-brands fa-apple me-2"></i>
                                    {t("Footer_AppiOS")}&nbsp;
                                    <span className="text-secondary">{t("Shared_ComingSoon")}</span>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <i className="fa-brands fa-android me-2"></i>
                                    {t("Footer_AppAndroid")}&nbsp;
                                    <span className="text-secondary">{t("Shared_ComingSoon")}</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Copyright w-100">
                <h6 className="mb-0 text-center text-sm-start">{t("Footer_Copyright")}</h6>
            </div>
        </>
    );
}

export default withTranslation()(Footer);