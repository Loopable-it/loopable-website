import { withTranslation } from "react-i18next";

import serachImage from "../../assets/loopable-search-product.webp";
import priceImage from "../../assets/loopable-product-price.webp";

import "./HowItWorks.css";

function HowItWorks() {
    const stepsList = [
        {
            key: 0,
            icon: "fa-solid fa-right-to-bracket",
            title: "Login",
            subtitle: "Voluptate suscipit sed porro sunt sed dolor amet."
        },
        {
            key: 1,
            icon: "fa-solid fa-magnifying-glass",
            title: "Search what you need",
            subtitle: "Voluptate suscipit sed porro sunt sed dolor amet."
        },
        {
            key: 2,
            icon: "fa-solid fa-thumbs-up",
            title: "Choose the best option",
            subtitle: "Voluptate suscipit sed porro sunt sed dolor amet."
        },
        {
            key: 3,
            icon: "fa-solid fa-wand-magic-sparkles",
            title: "Rent it",
            subtitle: "Voluptate suscipit sed porro sunt sed dolor amet."
        },
    ];

    return (
        <div className="HowItWorks">
            <p className="small-bold-text grey-text text-center p-0">
                <span className="green-text">-</span> How it works
            </p>

            <h2 className="large-title grey-text text-center">
                Rent what you need in<br/>
                <span className="green-text">4 easy steps</span>
            </h2>

            <div className="row mx-0 my-5">
                <div className="col-12 col-md-6 px-0 bg-secondary">
                    
                </div>
                <div className="col-12 col-md-6 px-0">
                    {
                        stepsList.map((item) => {
                            let iconStyle = item.key != stepsList.length - 1 ? 
                                "grey-text bg-body-secondary bg-opacity-75" : 
                                "green-text light-green-bg"
                            
                            let textStyle = item.key != stepsList.length - 1 ? 
                                "grey-text" : 
                                "green-text"    
                            return (
                                <div className="row mx-0 mb-4" key={item.key}>
                                    <div className="col-auto">
                                        <i className={`${item.icon} ${iconStyle} p-4 rounded-circle`} style={{fontSize: "25px"}}></i>
                                    </div>
                                    <div className="col-auto align-self-center">
                                        <h3 className={`medium-bold-text ${textStyle} m-0`}>{item.title}</h3>
                                        <p className={`medium-text ${textStyle} m-0`}>{item.subtitle}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <h2 className="large-title grey-text text-center">
                <span className="green-text">Key features </span> of the <br/>Loopable app
            </h2>

            <div className="row mx-0 my-5 text-center">
                <div className="col">
                    <div className="bg-white radius rounded-4 px-3 pt-3">
                        <h3 className="medium-bold-text grey-text">Intuitive search</h3>
                        <p className="medium-text grey-text">Voluptate suscipit sed porro sunt sed dolor amet.</p>
                        <img src={serachImage} className="img-fluid"/>
                    </div>
                </div>
                <div className="col">
                    <div className="bg-white radius rounded-4 px-3 pb-3">
                        <img src={priceImage} className="img-fluid"/>
                        <h3 className="medium-bold-text grey-text">Intuitive search</h3>
                        <p className="medium-text grey-text">Voluptate suscipit sed porro sunt sed dolor amet.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="bg-white radius rounded-3 p-3">
                        <h3 className="medium-bold-text grey-text">Intuitive search</h3>
                        <p className="medium-text grey-text">Voluptate suscipit sed porro sunt sed dolor amet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(HowItWorks);