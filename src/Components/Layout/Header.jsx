import React from "react";
import {BsArrowRight} from "react-icons/bs"
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top py-4">
        <div className="container">
          <a href="/">
            <div>
              <img
                className="quant"
                src="assets/Quant-Logo.png"
                alt=" Logo "
                width={100}
              />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className=" header-nav-col collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item position-relative">
                <a className="nav-link" aria-current="page" href="/home">
                  Who
                </a>
                <div className="nav-content position-absolute">
                  <h1 className="drop-h1 ps-3 pt-3">Who we serve</h1>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="">
                          We empower banks, asset managers and other financial
                          institutions; enterprises, typically with
                          international operations; and the technology partners
                          and fintech developers who support them.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="ps-3">Financial <BsArrowRight className="ms-4"/></p>
                        <p className="ps-3">institutions <BsArrowRight className="ms-4"/></p>
                        <p className="ps-3">Enterprises <BsArrowRight className="ms-4"/></p>
                        <p className="ps-3">Partners <BsArrowRight className="ms-4"/></p>
                        <p className="ps-3">Developers <BsArrowRight className="ms-4"/></p> 
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  What
                </a>
                <div className="nav-content position-absolute">
                  <h1 className="drop-h1 ps-3 pt-3">What we do</h1>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="">
                        We solve pressing problems in finance with solutions for:
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="hover-nav ps-3">Digital currencies <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Payments <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Enterprises <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Partners <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Developers <BsArrowRight className="ms-4"/></p> 
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  How
                </a>
                <div className="nav-content position-absolute">
                  <h1 className="drop-h1 ps-3 pt-3">What we do</h1>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="">
                        We solve pressing problems in finance with solutions for:
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="hover-nav ps-3">Digital currencies <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Payments <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Enterprises <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Partners <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Developers <BsArrowRight className="ms-4"/></p> 
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Why
                </a>
                <div className="nav-content position-absolute">
                  <h1 className="drop-h1 ps-3 pt-3">How we do it</h1>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="">
                          We empower banks, asset managers and other financial
                          institutions; enterprises, typically with
                          international operations; and the technology partners
                          and fintech developers who support them.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="hover-nav ps-3">Financial <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">institutions <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Enterprises <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Partners <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Developers <BsArrowRight className="ms-4"/></p> 
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  About
                </a>
                <div className="nav-content position-absolute">
                  <h1 className="drop-h1 ps-3 pt-3">Who we serve</h1>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="">
                          We empower banks, asset managers and other financial
                          institutions; enterprises, typically with
                          international operations; and the technology partners
                          and fintech developers who support them.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="hover-nav ps-3">Financial <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">institutions <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Enterprises <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Partners <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Developers <BsArrowRight className="ms-4"/></p> 
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Sign In
                </a>
                <div className="nav-content position-absolute">
                  <h1 className="drop-h1 ps-3 pt-3">Who we serve</h1>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="">
                          We empower banks, asset managers and other financial
                          institutions; enterprises, typically with
                          international operations; and the technology partners
                          and fintech developers who support them.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="hover-nav ps-3">Financial <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">institutions <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Enterprises <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Partners <BsArrowRight className="ms-4"/></p>
                        <p className="hover-nav ps-3">Developers <BsArrowRight className="ms-4"/></p> 
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
