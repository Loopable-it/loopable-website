import logo from "../../assets/logo.svg";
import "./Header.css";

function Header() {
    return (
        <nav className="Header navbar border-bottom">
            <a className="mx-auto mx-sm-0" href="/">
                <img src={logo} alt="Logo Loopable" className="Header-logo" />
            </a>

            <button className="Primary-button d-none d-sm-inline">
                Notify me
            </button>
        </nav>
    );
}

export default Header;