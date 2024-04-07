import { withTranslation } from "react-i18next";
import { useState } from "react";

import "./FAQ.css";

function FAQ(props) {
    const { t } = props;
    const questionsList = [
        {
            question: "FAQ_Question_1",
            answer: "FAQ_Answer_1",
        },
        {
            question: "FAQ_Question_2",
            answer: "FAQ_Answer_2",
        },
    ];

    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setSelectedQuestion(selectedQuestion === index ? null : index);
    };
    
    return (
        <div className="FAQ" id="FAQ-section">
            <p className="small-bold-text grey-text text-center p-0">
                <span className="green-text">-</span> {t("FAQ_Section_Title")}
            </p>

            <h2 className="large-title grey-text text-center">
                {t("FAQ_Title_1")}
                <span className="green-text"> {t("FAQ_Title_2")}</span>?
            </h2>

            {
                questionsList.map((item, index) => {
                    return (
                        <div className="my-3" key={index}>
                            <div
                                role="button"
                                className="bg-white grey-text rounded-4 p-3 d-flex justify-content-between"
                                onClick={() => toggleQuestion(index)}>
                                <p className="medium-bold-text m-0">{t(item.question)}</p>
                
                                <p className="medium-bold-text m-0">
                                    <i className={`fa-solid fa-${selectedQuestion === index ? 'minus' : 'plus'}`}></i>
                                </p>
                            </div>
                            {
                                selectedQuestion === index && (
                                    <div className="bg-green rounded-4 p-3 mt-2 mx-3">
                                        <p className="medium-text white-text m-0">{t(item.answer)}</p>
                                    </div>
                                )
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default withTranslation()(FAQ);