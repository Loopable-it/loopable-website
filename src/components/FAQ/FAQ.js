import { withTranslation } from "react-i18next";
import { useState } from "react";

import "./FAQ.css";

function FAQ() {
    const questionsList = [
        {
            question: "Test question?",
            answer: "Test answer",
        },
        {
            question: "Test question?",
            answer: "Test answer",
        },
        {
            question: "Test question?",
            answer: "Test answer",
        },
        {
            question: "Test question?",
            answer: "Test answer",
        },
    ];

    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setSelectedQuestion(selectedQuestion === index ? null : index);
    };
    
    return (
        <div className="FAQ">
            <p className="small-bold-text grey-text text-center p-0">
                <span className="green-text">-</span> FAQ
            </p>

            <h2 className="large-title grey-text text-center">
                Any more
                <span className="green-text"> questions</span>?
            </h2>

            {
                questionsList.map((item, index) => {
                    return (
                        <div className="my-3" key={index}>
                            <div
                                className="bg-white grey-text rounded-4 p-3 d-flex justify-content-between"
                                onClick={() => toggleQuestion(index)}>
                                <p className="medium-bold-text m-0">{item.question}</p>
                
                                <p className="medium-bold-text m-0">
                                    <i className={`fa-solid fa-${selectedQuestion === index ? 'minus' : 'plus'}`}></i>
                                </p>
                            </div>
                            {
                                selectedQuestion === index && (
                                    <div className="bg-green rounded-4 p-3 mt-2 mx-3">
                                        <p className="medium-bold-text white-text m-0">{item.answer}</p>
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