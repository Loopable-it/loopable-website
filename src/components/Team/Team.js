import { withTranslation } from "react-i18next";

import MaggyPic from "../../assets/photo_maggy.png";
import MattiaPic from "../../assets/photo_mattia.png";
import "./Team.css";

function Team(props) {
  const { t } = props;
  const teamList = [
    {
      image: MaggyPic,
      name: "Maggy Protasio",
      role: "Co-Founder",
      description: "Team_Member_Maggy",
      linkedin: "https://www.linkedin.com/in/maggy-protasio/",
    },
    {
      image: MattiaPic,
      name: "Mattia Cintura",
      role: "Co-Founder",
      description: "Team_Member_Mattia",
      linkedin: "https://www.linkedin.com/in/mattia-cintura/",
    },
  ];

  return (
    <div className="Team w-100 mb-4">
      <div className="Team-card">
        <div className="Team-card-content row mx-0 text-center d-flex align-items-center px-0 px-xl-5">
          <div className="col-12 pb-5">
            <h2>{t("Team_OurTeam")}</h2>
            <p>{t("Team_OurTeam_Description")}</p>
            <a
              className="Linkedin-link"
              href="https://www.linkedin.com/company/loopable-it"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <i className="fa-brands fa-linkedin me-2"></i>
                {t("Team_FollowLinkedIn")}
              </span>
            </a>
          </div>
          {teamList.map(({ image, name, role, description, linkedin }) => {
            return (
              <div
                className="Team-member col-12 col-xl-6 mb-3 mb-xl-0"
                key={name}
              >
                <img src={image} alt={name} className="mb-2" />
                <h3 className="mb-2">{name}</h3>
                <p className="text-secondary mb-1">{role}</p>

                <h6>{t(description)}</h6>
                <a
                  className="Linkedin-link"
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <i className="fa-brands fa-linkedin me-2"></i>
                    LinkedIn
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Team);
