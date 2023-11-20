import { withTranslation } from "react-i18next";

import mockup from "../../assets/loopable-ios-app.webp";

import "./Hero.css";

function Hero(props) {
    const { t } = props;

    return (
        <div className="Hero w-100">
            <div className="Hero-container row mx-0">
                <div className="col-12 col-md-6 px-0 align-self-center">
                    <span className="small-title bg-white rounded-3 py-2 px-3">
                        <i class="fa-solid fa-star me-2" style={{color: '#18ce40'}}></i>
                        The best way to rent items
                    </span>

                    <h1 className="extra-large-title my-4">
                        Renting items <br/>
                        <span className="green-text">made easy</span>
                    </h1>

                    <p className="medium-text grey-text p-0">
                        Loopable revolutionizes the concept of renting by providing an innovative platform that allows users to find the items they need, whenever and wherever they want.
                    </p>
                </div>

                <div className="col-12 col-md-6 p-0 align-self-end">
                    <div>
                    <img src={mockup} className="img-fluid m-0"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(Hero);