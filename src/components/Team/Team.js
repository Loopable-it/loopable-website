import { withTranslation } from "react-i18next";

import MaggyPic from "../../assets/maggy-protasio-photo.png";
import MattiaPic from "../../assets/mattia-cintura-photo.png";
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
    <div className="Team w-100 mb-4" id="About-us-section">
      <p className="small-bold-text grey-text text-center p-0">
        <span className="green-text">-</span> {t("Team_Section_Title")}
      </p>

      <h2 className="large-title grey-text text-center">
        {t("Team_Title_1")}
        <span className="green-text"> {t("Team_Title_2")}</span>
      </h2>

      <p className="medium-text grey-text text-center px-5 my-3">
        {t("Team_Description")}
      </p>

      <a
        style={{textDecorationColor: "#464646"}}
        href="https://www.linkedin.com/company/loopable-it"
        target="_blank"
        rel="noreferrer">
        <p className="medium-bold-text grey-text text-center">
          {t("Team_FollowLinkedIn")}
        </p>
      </a>

      <div className="row mx-0 mt-5">
        {teamList.map(({ image, name, role, description, linkedin }) => {
          return (
            <div
              className="col-12 col-xl-6 mb-3 mb-xl-0"
              key={name}
            >
              <div className="row mx-0 mb-4 text-center text-sm-start external-line">
                <div className="col-12 col-sm-3 mb-2 mb-sm-0">
                  <img src={image} alt={name} height={150} />
                </div>
                <div className="col-12 col-sm-9 align-sm-self-center">
                <a
                  style={{textDecorationColor: "#464646"}}
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer">
                    <h3 className="medium-bold-text grey-text m-0 mb-2 mb-sm-0">
                      {name}
                    </h3>
                </a>
                    <p className="medium-text grey-text m-0 pe-sm-5">
                      {t(description)}
                    </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withTranslation()(Team);
