import logo from '../../assets/logo.svg';
import './Header.css';

function Header() {
    return (
        <nav className="navbar border-bottom Header">
            <a className="mx-auto mx-sm-0" href="/">
                <img src={logo} alt="Logo Loopable" className="Header-logo" />
            </a>

            <button className="d-none d-sm-inline Primary-button">
                Notify me
            </button>
        </nav>
    );
}

export default Header;