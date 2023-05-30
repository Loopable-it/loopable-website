import whatIs from "../../assets/what-is.png";
import whyShould from "../../assets/why-should.png";
import how from "../../assets/how.png";
import "./Questions.css";

function Questions() {
    return (
        <div className="Questions w-100 my-4">
            <div className="Questions-card row mx-0 d-flex align-items-center mb-4">
                <div className="col-12 col-sm-6 text-center text-sm-start">
                    <h2>What is Loopable?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="d-flex col-12 order-first justify-content-center col-sm-6 order-sm-last justify-content-sm-end">
                      <img src={whatIs} alt="" />
                </div>
            </div>
            <div className="Questions-card row mx-0 d-flex align-items-center mb-4">
                <div className="d-flex col-12 justify-content-center col-sm-6 justify-content-sm-start">
                      <img src={whyShould} alt="" />
                </div>
                <div className="col-12 col-sm-6 text-center text-sm-start">
                    <h2>Why should you use Loopable?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            </div>
            <div className="Questions-card row mx-0 d-flex align-items-center mb-4">
                <div className="col-12 col-sm-6 text-center text-sm-start">
                    <h2>How do we help our planet?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="d-flex col-12 order-first justify-content-center col-sm-6 order-sm-last justify-content-sm-end">
                      <img src={how} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Questions;