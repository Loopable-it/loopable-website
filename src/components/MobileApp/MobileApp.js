import { withTranslation } from "react-i18next";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

import search from "../../assets/search.webp";
import product from "../../assets/product.webp";
import result from "../../assets/result.webp";

import "./MobileApp.css";

function MobileApp(props) {
  const { t } = props;

  return (
    <>
      <div className="MobileApp w-100 mb-0 text-center" id="MobileApp-section">
        <h4 className="MobileApp-title mb-3">{t("MobileApp_Title")}</h4>

        <p>{t("MobileApp_Description")}</p>

        <button
          className="Primary-button mb-5"
          onClick={() =>
            window.open("http://eepurl.com/iuaINI", "_blank", "noreferrer")
          }
        >
          {t("MobileApp_NewsletterSubscribe")}
        </button>
      </div>

      <div className="bg-green-loop w-100">
        <div className="text-center" style={{ height: "700px" }}>
          <Parallax
            pages={3}
            className="w-100 mb-0 text-center parallax-container"
            style={{ height: "700px" }}
          >
            <ParallaxLayer offset={0}>
              <img src={search} alt="Logo Loopable" height={700} />
            </ParallaxLayer>
            <ParallaxLayer offset={1}>
              <img src={result} alt="Logo Loopable" height={700} />
            </ParallaxLayer>
            <ParallaxLayer offset={2}>
              <img src={product} alt="Logo Loopable" height={700} />
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(MobileApp);
