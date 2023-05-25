import logo from '../../assets/logo.svg';
import './Header.css';

function Header() {
    return (
        <nav className="navbar border-bottom">
            <a className="navbar-brand me-0" href="javascript:void(0)">
                <img src={logo} alt="Logo Loopable" className="Header-logo" />
            </a>

            <a className="py-2 px-3 d-none d-sm-inline Primary-button" href="javascript:void(0)">
                Notify me
            </a>
        </nav>
    );
}

export default Header;