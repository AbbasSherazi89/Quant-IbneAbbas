import React from "react";

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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/home">
                  Who
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  What
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  How
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Why
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
