import { withTranslation } from "react-i18next";

import logo from "../../assets/logo.svg";
import "./Header.css";

function Header(props) {
    const { t } = props;

    const onLanguageChanged = (event) => {
        let language = event.currentTarget.value;
        props.i18n.changeLanguage(language);
    };

    const isLanguageSelected = (language) => {
        return props.i18n.language === language ? "fw-bold" : "";
    };

    return (
        <nav className="Header navbar border-bottom">
            <a className="mx-0" href="/">
                <img src={logo} alt="Logo Loopable" className="Header-logo" />
            </a>

            <div className="d-flex justify-content-evenly">
                <button className="Primary-button d-none d-sm-inline me-5">
                    {t("Shared_NotifyMe")}
                </button>
                <button className={`Header-language-button ${isLanguageSelected("en")}`}
                        value="en" onClick={(value) => onLanguageChanged(value)}>
                    EN
                </button>
                <div className="vr my-2"></div>
                <button className={`Header-language-button ${isLanguageSelected("it")}`}
                    value="it" onClick={(value) => onLanguageChanged(value)}>
                    IT
                </button>
            </div>
        </nav>
    );
}

export default withTranslation()(Header);