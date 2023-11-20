import { withTranslation } from "react-i18next";

import "./Features.css";

function Features(props) {
    const { t } = props;
    const featuresList = [
        {
            key: "",
            icon: "fa-solid fa-pen-nib",
            title: "User experience focused",
            subtitle: "Voluptate suscipit sed porro sunt sed dolor amet. Saepe aut repellat et velit."
        },
        {
            key: "",
            icon: "fa-solid fa-bell",
            title: "Immediate feedback",
            subtitle: "Voluptate suscipit sed porro sunt sed dolor amet. Saepe aut repellat et velit."
        },
        {
            key: "",
            icon: "fa-solid fa-user-check",
            title: "Product reviews",
            subtitle: "Voluptate suscipit sed porro sunt sed dolor amet. Saepe aut repellat et velit."
        }
    ];

    return (
        <div className="Features w-100 row mx-0">
            <div className="mb-5">
                <p className="small-bold-text white-text p-0">
                    <span className="green-text">-</span> Benefits of the Loopable app
                </p>

                <h2 className="large-title white-text">
                    Why Loopable<br/>
                    <span className="green-text">is revolutionary</span>
                </h2>
            </div>
            {
                featuresList.map((item) => {
                    return (
                        <div className="col-12 col-md-4" key={item.key}>
                            <i className={`${item.icon} green-text p-4 bg-light bg-opacity-75 rounded-4`}></i>
                            <h3 className="medium-bold-text white-text my-3">{item.title}</h3>
                            <p className="medium-text white-text">{item.subtitle}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default withTranslation()(Features);