import { withTranslation } from "react-i18next";

import logo from "../../assets/logo.svg";
import "./Header.css";

function Header(props) {
    const onLanguageChanged = (event) => {
        let language = event.currentTarget.value;
        props.i18n.changeLanguage(language);
    };

    return (
        <nav className="Header navbar border-bottom">
            <a className="mx-auto mx-sm-0" href="/">
                <img src={logo} alt="Logo Loopable" className="Header-logo" />
            </a>

            <div className="d-flex justify-content-evenly">
                <button className="Primary-button d-none d-sm-inline me-3">
                    Notify me
                </button>
                <button className="" value="en" onClick={(value) => onLanguageChanged(value)}>
                    EN
                </button>
                <button className="" value="it" onClick={(value) => onLanguageChanged(value)}>
                    IT
                </button>
            </div>
        </nav>
    );
}

export default withTranslation()(Header);