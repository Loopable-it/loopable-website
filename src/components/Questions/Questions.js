import whatIs from "../../assets/what-is.png";
import whyShould from "../../assets/why-should.png";
import how from "../../assets/how.png";
import "./Questions.css";

function Questions() {
    return (
        <div className="Questions w-100 my-5">
            <div className="row mx-0 d-flex align-items-center">
                <div className="col-6">
                    <h2>What is Loopable?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="col-6 d-flex justify-content-end">
                      <img src={whatIs} alt="" />
                </div>
            </div>
            <div className="row mx-0 d-flex align-items-center">
                <div className="col-6 d-flex justify-content-start">
                      <img src={whyShould} alt="" />
                </div>
                <div className="col-6">
                    <h2>Why should you use Loopable?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            </div>
            <div className="row mx-0 d-flex align-items-center">
                <div className="col-6">
                    <h2>How do we help our planet?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="col-6 d-flex justify-content-end">
                      <img src={how} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Questions;