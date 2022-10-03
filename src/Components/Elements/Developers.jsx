import React from "react";

const Developers = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="power-h2">Developers unleashed</h2>
            <p className="power-p">
              Develop on Overledger without specialist blockchain knowledge.
            </p>
            <button className="btn btn-outline-danger fw-bold text-black">
              Find out more
            </button>
          </div>
          <div className="col-md-6 text-center">
            <img className='img-fluid' src="assets/laptop.svg" alt="box" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;
