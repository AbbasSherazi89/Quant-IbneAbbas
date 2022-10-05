import React from "react";
import {BsTwitter, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted pt-5">
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Who we serve</h6>
                <p>
                  <a href="/" className="text-reset">
                    Financial institutions
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Enterprises
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Partners
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Developers
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">What we do</h6>
                <p>
                  <a href="/" className="text-reset">
                    Digital currencies
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Payments
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Supply chain and trade finance
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    capitla market
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Compliance
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Insurance
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">How we do it</h6>
                <p>
                  <a href="/" className="text-reset">
                    Products
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    -Overledger Integrate
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    -Overledger Tokenise
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Networks
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Ecosystems
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    -Developer Programme
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    -Partners
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    -Associations
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Why it matters</h6>
                <p>
                  <a href="/" className="text-reset">
                    All
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    News
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Events
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Perceptives
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Research
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Use Cases
                  </a>
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">About us</h6>
                <p>
                  <a href="/" className="text-reset">
                    Mission and values
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Leadership
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Carrers
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Media Center
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Contact
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className=" horzontal-line ">
          {" "}
          <hr />{" "}
        </div>
        <div className="container p-4">
              <div className="container">
                <div className="row pt-3 pb-3">
                  <div className="col-md-2 pt-2"><img src="assets/Quant-Logo.png" alt=" " width={100} /></div>
                  <div className="col-md-4 pt-2"></div>
                  <div className="col-md-2 pt-2"><a className="fw-bold text-black text-decoration-none" href="/">Privacy policy</a></div>
                  <div className="col-md-2 pt-2"><a className="fw-bold text-black text-decoration-none" href="/">Terms of use</a></div>
                  <div className="col-md-2 pt-2"><a className="text-decoration-none" href="/"> <BsTwitter className="icons" /> <BsLinkedin className="icons" /></a></div> 
                </div>
              </div>
          © 2022 Quant Network Limited. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
