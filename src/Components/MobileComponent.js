import React from "react";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";

function GooeyMenu() {
  return (
    <div>
      <nav className="menu">
        <input
          type="checkbox"
          href="#"
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label className="menu-open-button" htmlFor="menu-open">
          <span className="hamburger hamburger-1" />
          <span className="hamburger hamburger-2" />
          <span className="hamburger hamburger-3" />
        </label>
        <a href="#" className="menu-item">
          {" "}
          <ContactsRoundedIcon className="GooeyIcon" fontSize="large" />{" "}
        </a>
        <a href="#" className="menu-item">
          {" "}
          <BusinessCenterRoundedIcon
            className="GooeyIcon"
            fontSize="large"
          />{" "}
        </a>
        <a href="#" className="menu-item">
          {" "}
          <TipsAndUpdatesRoundedIcon
            className="GooeyIcon"
            fontSize="large"
          />{" "}
        </a>
        <a href="#" className="menu-item">
          {" "}
          <PersonRoundedIcon className="GooeyIcon" fontSize="large" />{" "}
        </a>
        <a href="#" className="menu-item">
          {" "}
          <HomeRoundedIcon className="GooeyIcon" fontSize="large" />{" "}
        </a>
      </nav>
      {/* filters */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="shadowed-goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation={10}
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feGaussianBlur in="goo" stdDeviation={3} result="shadow" />
            <feColorMatrix
              in="shadow"
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
              result="shadow"
            />
            <feOffset in="shadow" dx={1} dy={1} result="shadow" />
            <feBlend in2="shadow" in="goo" result="goo" />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation={10}
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function MobileComponent() {
  return (
    <>
      <GooeyMenu />
      <div className="d-flex flex-column justify-content-center w-100 h-100">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="fw-light text-white m-0">
            Pure CSS Gradient Background Animation
          </h1>
          <div className="btn-group my-5">
            <a
              href="https://codepen-api-export-production.s3.us-west-2.amazonaws.com/zip/PEN/pyBNzX/1578778289271/pure-css-gradient-background-animation.zip"
              className="btn btn-outline-light"
              aria-current="page"
            >
              <i className="fas fa-file-download me-2" /> SOURCE CODE
            </a>
            <a
              href="https://codepen.io/P1N2O/full/pyBNzX"
              className="btn btn-outline-light"
            >
              FULL SCREEN <i className="fas fa-expand ms-2" />
            </a>
          </div>
          <a href="https://manuel.pinto.dev" className="text-decoration-none">
            <h5 className="fw-light text-white m-0">— Pen by Manuel Pinto —</h5>
          </a>
        </div>
      </div>
    </>
  );
}

export default MobileComponent;
