import React from 'react'

const BuiltFor = () => {
  return (
    <>
        <div className="container py-5">
        <div className="row">
          <div className="col-md-6 text-center">
          <div data-aos="fade-down-right">
            <img className='img-fluid' src="assets/Arrow_home.svg" alt="box" />
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="power-h2">
            Built for enterprises
            </h2>
            <p className="power-p">
            Led by an experienced team from large corporate, financial and regulatory institutions, we enable existing financial infrastructure to operate with new decentralised networks.
            </p>
            <button className="btn btn-outline-danger fw-bold text-black">
              Find out more
            </button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default BuiltFor
