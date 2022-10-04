import React from "react";

const UnlockingPower = () => {
  return (
    <>
      <div className="container py-5 container2">
        <div className="row">
          <div className="col-md-6">
          <div data-aos="flip-left">
            <img className='img-fluid' src="assets/Box_Row.svg" alt="door" />
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="power-h2">
              Unlocking the power of blockchain for everyone
            </h2>
            <p className="power-p">
              We deliver interoperable ecosystems and real-world solutions that
              lower costs, enable new business, and mitigate risk.
            </p>
            <button className="btn btn-outline-danger fw-bold text-black">
              Let's talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnlockingPower;
