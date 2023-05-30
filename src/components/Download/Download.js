import mockup from "../../assets/mockup_3.png"
import "./Download.css";

function Download() {
    return (
        <div className="Download w-100 mb-0 text-center">
            <h4 className="Download-title mb-5">
                Start putting your items on to the loop today
            </h4>

            <input className="Email-form mb-3" placeholder="Email" type="email" size="30" />

            <div className="w-100"></div>

            <button className="Primary-button mb-5">
                Notify me
            </button>

            <div className="w-100"></div>

            <img src={mockup} alt="" />
        </div>
    );
}

export default Download;