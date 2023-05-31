import "./Features.css";

function Features() {
    return (
        <div className="Features w-100 row mx-0 text-center d-flex align-items-center">
            <div className="col-12 col-sm-4">
                <i class="fa-solid fa-hand-holding-dollar mb-3" style={{color: "#FB6107"}}/>
                <h3>Earn</h3>
                <p>Make money by lending</p>
            </div>
            <div className="col-12 col-sm-4">
                <i class="fa-solid fa-wallet mb-3" style={{color: "#0EB1D2"}}/>
                <h3>Rent</h3>
                <p>Effortlessly book and enjoy</p>
            </div>
            <div className="col-12 col-sm-4">
                <i class="fa-solid fa-leaf mb-3" style={{color: "#18CE40"}}/>
                <h3>Share</h3>
                <p>Embrace collaborative consumption</p>
            </div>
        </div>
    );
}

export default Features;