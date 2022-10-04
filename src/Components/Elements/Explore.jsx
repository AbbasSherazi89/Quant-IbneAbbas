import React from "react";

const Explore = () => {
  return (
    <>
      <div className="container py-4">
        <h1 className="power-h2 text-center">Explore the future</h1>
        <p className="explore-p text-center pt-4 pb-4">
          Much of the financial world’s digital future <br /> will be built on
          blockchain. Find out why.
        </p>

        <div className="city_img">
          <div className="card img-card py-3" style={{ width: "30rem" }}>
            <div className="card-body">
              <p className="news ms-3 me-2 text-warning">Events</p>
              <p className="date ms-3 me-2"> 3 October 2022</p>
              <h3 className="card-text ms-3 me-2">
              Your guide to Sibos 2022
              </h3>
              <a href="/" className="card-link text-uppercase ms-3">
              Financial institutions
              </a>
              <a href="/" className="card-link text-uppercase">
              Partners
              </a>
              <a href="/" className="card-link text-uppercase">
              Sibos
              </a>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-3">
            <div className="card mt-3 cards" >
              <div className="card-body">
                <p className="news ms-3 me-2 text-warning"> News</p>
                <p className="date ms-3 me-2"> 29 september 2022</p>
                <h3 className="card-text ms-3 me-2">
                Martin Hargreaves on the benefits of CBDCs for consumers
                </h3>
                <a href="/" className="card-link text-uppercase ms-3">
                  CBDC
                </a>
                <a href="/" className="card-link text-uppercase">
                  CITYAM
                </a>
                <a href="/" className="card-link text-uppercase">
                  ENTERPRISES
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-3 cards" >
              <div className="card-body">
                <p className="news ms-3 me-2 text-warning"> Events</p>
                <p className="date ms-3 me-2"> 15 September 2022</p>
                <h3 className="card-text ms-3 me-2">
                Gilbert Verdian explains The Merge
                </h3>
                <a href="/" className="card-link text-uppercase ms-3">
                Blockchain
                </a>
                <a href="/" className="card-link text-uppercase">
                Developers
                </a>
                <br/>
                <a href="/" className="card-link text-uppercase ms-3">
                Enterprises
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-3 cards">
              <div className="card-body">
                <p className="news ms-3 me-2 text-warning"> News</p>
                <p className="date ms-3 me-2"> 12 September 2022 </p>
                <h3 className="card-text ms-3 me-2">
                The multi-chain future: sidechains, layer 2s and The Merge
                </h3>
                <a href="/" className="card-link text-uppercase ms-3">
                Architecture
                </a>
                <a href="/" className="card-link text-uppercase">
                Associations
                </a>
                <a href="/" className="card-link text-uppercase">
                Developers
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-3 cards">
              <div className="card-body">
                <p className="news ms-3 me-2 text-warning"> Perspectives</p>
                <p className="date ms-3 me-2"> 5 September 2022 </p>
                <h3 className="card-text ms-3 me-2">
                Overledger 2.2.14 is an engineering release  
                </h3>
                <a href="/" className="card-link text-uppercase ms-3">
                Developers
                </a>
                <a href="/" className="card-link text-uppercase">
                Overledger
                </a>
                <br/>
                <a href="/" className="card-link text-uppercase ms-3">
                Product release
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
