import React from 'react'

const DesignedFor = () => {
  return (
    <>
     <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="power-h2">Designed for <br/> the future</h2>
            <p className="power-p">
            With our blockchain-agnostic approach, your existing infrastructure investments are protected. And the door is open to future cross-platform applications.
            </p>
            <button className="btn btn-outline-danger fw-bold text-black">
              Find out more
            </button>
          </div>
          <div className="col-md-6 text-center">
          <div data-aos="fade-right">
            <img className='img-fluid' src="assets/arrow_door.svg" alt="box" />
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default DesignedFor
