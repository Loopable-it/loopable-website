import { withTranslation } from "react-i18next";

import logo from "../../assets/loopable-logo-white.svg";
import "./Footer.css";

function Footer(props) {
  const { t } = props;

  const routesList = [
    "Home",
    "Benefits",
    "How it works",
    "Business",
    "About us",
    "FAQ",
  ];

  const contactList = [
    "www.loopable.it",
    "info@loopable.it"
  ];

  return (
    <div className="Footer w-100">
      <div className="row mx-5 d-flex justify-content-center justify-content-md-between">
        <div className="col-12 text-center mb-3 col-md-2 text-md-start mb-md-0">
          <img src={logo} alt="Logo Loopable" className="Footer-logo mb-2" />
          <p className="small-text white-text">
            Loopable revolutionizes the concept of renting by providing an innovative platform that allows users to find the items they need, whenever and wherever they want.
          </p>
        </div>

        <div className="col-auto d-none d-md-block"></div>

        <div className="col-12 text-center mb-3 col-md-2 text-md-start mb-md-0">
          <p className="medium-bold-text white-text">Company</p>
          <ul>
            {routesList.map((item, index) => {
              return (
                <li key={index}>
                  <p className="small-text white-text m-0">{item}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-12 text-center mb-3 col-md-2 text-md-start mb-md-0">
          <p className="medium-bold-text white-text">Company</p>
          <ul>
            {contactList.map((item, index) => {
              return (
                <li key={index}>
                  <p className="small-text white-text m-0">{item}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-12 text-center mb-3 col-md-2 text-md-start mb-md-0">
          <p className="medium-bold-text white-text">Subscribe to our newsletter</p>
          <button className="grey-button">
            Subscribe
          </button>
        </div>
      </div>

      <div className="row mx-5 mt-5" style={{borderTop: "2px solid #FFF"}}>
          <p className="small-text white-text mt-3">© 2023 Loopable. All rights reserved</p>
      </div>
    </div>
  );
}

export default withTranslation()(Footer);
