import { withTranslation } from "react-i18next";

import "./Business.css";

function Business(props) {
    const { t } = props;
    const featuresList = [
        {
            key: 0,
            icon: "fa-solid fa-rectangle-ad",
            title: "Promote your services",
            subtitle: "Voluptate suscipit sed porro sunt sed dolor amet. Saepe aut repellat et velit."
        },
        {
            key: 1,
            icon: "fa-solid fa-list-check",
            title: "Manage",
            subtitle: "Voluptate suscipit sed porro sunt sed dolor amet. Saepe aut repellat et velit."
        },
        {
            key: 2,
            icon: "fa-solid fa-arrow-up-right-dots",
            title: "Increase revenues",
            subtitle: "Voluptate suscipit sed porro sunt sed dolor amet. Saepe aut repellat et velit."
        }
    ];

    return (
        <div className="Business w-100 row mx-0">
            <div className="mb-5 d-flex justify-content-between">
                <div className="m-0">
                    <p className="small-bold-text white-text p-0">
                        <span className="grey-text">-</span> Benefits of Loopable for your business
                    </p>

                    <h2 className="large-title white-text">
                        How can Loopable<br/>
                        <span className="grey-text">help your business</span>
                    </h2>
                </div>

                <button className="grey-button">
                    Enroll your business
                </button>
            </div>
            {
                featuresList.map((item) => {
                    return (
                        <div className="col-12 col-md-4" key={item.key}>
                            <i className={`${item.icon} grey-text p-4 bg-light bg-opacity-75 rounded-4`} style={{fontSize: "25px"}}></i>
                            <h3 className="medium-bold-text white-text my-3">{item.title}</h3>
                            <p className="medium-text white-text">{item.subtitle}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default withTranslation()(Business);