import { withTranslation } from "react-i18next";

import teamPic from "../../assets/IMG_5075.jpg";
import "./Team.css";

function Team(props) {
    const { t } = props;

    return (
        <div className="Team w-100 mb-4">
            <div className="Team-card">
                <div className="Team-card-content row mx-0 d-flex align-items-center">
                    <div className="col-12 col-sm-6 text-center text-sm-start">
                        <h2>{t("Team_OurTeam")}</h2>
                        <p>{t("Team_OurTeam_Description")}</p>
                        <a className="Linkedin-link" href="https://www.linkedin.com/company/loopable-it" target="_blank" rel="noreferrer">
                            <span>
                                <i class="fa-brands fa-linkedin me-2"></i>
                                {t("Team_FollowLinkedIn")}
                            </span>
                        </a>
                    </div>
                    <div className="d-flex col-12 order-first justify-content-center justify-content-sm-end col-sm-6 order-sm-last">
                        <img src={teamPic} alt="Our team" className="mb-3 mb-sm-0" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(Team);