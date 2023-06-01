import logo from "../../assets/logo.svg";
import "./Footer.css";

function Footer() {
    return (
        <>
            <div className="Footer w-100">
                <div className="row mx-0">
                    <div className="col-auto text-center mb-3 col-sm-2 text-sm-start mb-sm-0">
                        <img src={logo} alt="Logo Loopable" className="Footer-logo mb-2" />
                        <h6>
                            Renting marketplace for earning and contributing in the circular economy.
                        </h6>
                    </div>
                </div>
            </div>
            <div className="Copyright w-100">
                <h6 className="mb-0 text-center text-sm-start">© 2023 Loopable. All rights reserved</h6>
            </div>
        </>
    );
}

export default Footer;