import React from "react";
import { useRef } from "react";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

function MobileComponent() {
  const HomeRef = useRef(null);
  const AboutMeRef = useRef(null);
  const SkillsRef = useRef(null);
  const PortfolioRef = useRef(null);
  const ContactmeRef = useRef(null);

  function GooeyMenu() {
    return (
      <div className="GooeyGooey">
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
          <label
            onClick={() =>
              ContactmeRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            htmlFor="menu-open"
            className="menu-item"
          >
            {" "}
            <ContactsRoundedIcon className="GooeyIcon" fontSize="large" />{" "}
          </label>
          <label
            onClick={() =>
              PortfolioRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            htmlFor="menu-open"
            href="#"
            className="menu-item"
          >
            {" "}
            <BusinessCenterRoundedIcon
              className="GooeyIcon"
              fontSize="large"
            />{" "}
          </label>
          <label
            onClick={() =>
              SkillsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            htmlFor="menu-open"
            href="#"
            className="menu-item"
          >
            {" "}
            <TipsAndUpdatesRoundedIcon
              className="GooeyIcon"
              fontSize="large"
            />{" "}
          </label>
          <label
            onClick={() =>
              AboutMeRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            htmlFor="menu-open"
            href="#"
            className="menu-item"
          >
            {" "}
            <PersonRoundedIcon className="GooeyIcon" fontSize="large" />{" "}
          </label>
          <label
            onClick={() =>
              HomeRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            htmlFor="menu-open"
            href="#"
            className="menu-item"
          >
            {" "}
            <HomeRoundedIcon className="GooeyIcon" fontSize="large" />{" "}
          </label>
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

  return (
    <>
      <GooeyMenu />
      <section className="DevBack" ref={HomeRef}>
        <div>
          <div className="title">
            <h1 className="titleee">The Mind of a Web Developer</h1>
          </div>
          <div className="DevDeskContainer">
            <div className="developer">
              <div className="worker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 777 392"
                >
                  <defs>
                    <path
                      id="a"
                      d="M661.13187,312 C659.872124,314.376529 657.370611,316 654.49038,316 L654.002374,316 C653.439102,316 653,316.45191 653,317.009369 L653,318.990631 C653,319.556647 653.444523,320 653.992869,320 L709.500115,320 C715.853325,320 720.96234,314.851275 720.915884,308.5 C720.869418,302.147329 715.680241,297 709.325509,297 L654.008968,297 C653.455353,297 653,297.45191 653,298.009369 L653,299.990631 C653,300.556647 653.448778,301 654.002374,301 L654.49038,301 C657.369959,301 659.873421,302.621098 661.133241,305 L707,305 L707,306 L661.57236,306 C661.796205,306.632073 661.937588,307.303033 661.983562,307.999999 L707,308 L707,309 L661.983514,309 C661.937435,309.696635 661.795783,310.367655 661.57151,311 L707,311 L707,312 L661.13187,312 L661.13187,312 Z"
                    />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path
                      fill="#0367a6"
                      d="M200.438435,352.970861 C215.220895,352.297326 227,340.031986 227,325 C227,311.270943 217.174356,299.849708 204.20893,297.459797 L204.580247,291.993081 C204.880259,287.576165 201.563732,284 197.17295,284 L150.426074,284 C146.046272,284 142.718932,287.578624 143.018776,291.993081 L147.502654,358.006919 C147.802665,362.423835 150.972094,366 154.582143,366 L193.01688,366 C196.617902,366 199.796525,362.421376 200.09637,358.006919 L200.438435,352.970861 L200.438435,352.970861 Z"
                    />
                    <path
                      fill="#feb47b"
                      d="M201.119847,342.938789 C210.04472,342.190215 217.055983,334.668501 217.055983,325.5 C217.055983,317.151323 211.242521,310.168098 203.464421,308.420816 L201.119847,342.938789 Z"
                    />
                    <path
                      fill="#F1DBCB"
                      d="M415,187 C415,187 376,194 366,203 C358.903987,209.386411 289,274 279,283 C269,292 263,299 263,308 C263,317 269,324 279,330 C289,336 337,346 337,346 L540,346 C540,346 586,336 596,330 C606,324 612,317 612,308 C612,299 606,292 596,283 C586,274 521,212 509,203 C497,194 462,187 462,187 L415,187 Z"
                    />
                    <path
                      fill="#05451c"
                      d="M415,187 C415,187 376,194 366,203 C362.988968,205.709928 329.637386,236.421319 305.095167,259.010557 C305.095167,259.010557 333.212929,281.908364 332,283 L337,346 L540,346 L545,283 L570.333229,259.00712 C547.358592,237.435001 516.847183,208.885387 509,203 C497,194 462,187 462,187 L415,187 Z"
                    />
                    <path
                      fill="#EFC7B0"
                      d="M414,165 L463,165 L463,187.5 C463,199.926407 452.936244,210 440.507762,210 L436.492238,210 C424.070118,210 414,199.929139 414,187.5 L414,165 Z"
                    />
                    <path
                      fill="#322525"
                      d="M438.5,181 C477.98836,181 510,142.272631 510,94.5 C510,74.9145644 504.619581,56.8494289 495.549367,42.349893 L469.5,0.5 L438.5,30.4040298 L461,0.5 L428,17.5 L438.5,8 C428.697057,8 419.354885,10.3866722 410.848845,14.705911 C407.59314,16.3591087 404.459928,18.2954258 401.470255,20.4893993 C397.54565,23.3694736 393.868398,26.6935507 390.486111,30.4040298 C376.060111,46.2298235 367,69.0848918 367,94.5 C367,142.272631 399.01164,181 438.5,181 Z"
                    />
                    <path
                      fill="#EFC7B0"
                      d="M496,100 L496,127 L500.5,127 C507.955844,127 514,120.955844 514,113.5 C514,106.044156 507.955844,100 500.5,100 L496,100 Z"
                    />
                    <path
                      fill="#EFC7B0"
                      d="M363,100 L363,127 L367.5,127 C374.955844,127 381,120.955844 381,113.5 C381,106.044156 374.955844,100 367.5,100 L363,100 Z"
                      transform="matrix(-1 0 0 1 744 0)"
                    />
                    <path
                      fill="#262261"
                      d="M497,107 L501.703209,107 C505.331454,107 508.272727,109.910149 508.272727,113.5 C508.272727,117.089851 505.331454,120 501.703209,120 L497,120 L497,107 Z"
                    />
                    <path
                      fill="#262261"
                      d="M368.727273,107 L373.430481,107 C377.058726,107 380,109.910149 380,113.5 C380,117.089851 377.058726,120 373.430481,120 L368.727273,120 L368.727273,107 Z"
                      transform="matrix(-1 0 0 1 748.727 0)"
                    />
                    <path
                      fill="#262261"
                      d="M505,114 C505,114 502.833333,148.833333 498,166 C493.166667,183.166667 476,216 476,216 L479,216 C479,216 496.166667,184.166667 501,167 C505.833333,149.833333 508.252441,114 508.252441,114 C508.252441,114 505,114 505,114 Z"
                    />
                    <path
                      fill="#262261"
                      d="M397.75,114 C397.75,114 395.583333,148.833333 390.75,166 C385.916667,183.166667 368.75,216 368.75,216 L371.75,216 C371.75,216 388.916667,184.166667 393.75,167 C398.583333,149.833333 401.002441,114 401.002441,114 C401.002441,114 397.75,114 397.75,114 Z"
                      transform="matrix(-1 0 0 1 769.752 0)"
                    />
                    <path
                      fill="#F1DBCB"
                      d="M383,69 L386,76 L394,65.5 C394,65.5 408.219009,79.3535052 425,82.5 C441.780991,85.6464948 457.128583,77.505551 461,76 L457,71.5 C457,71.5 465.5,70.5 478,67 C490.5,63.5 492,59 492,59 C497,63 497,67 497,76 L497,127.495103 C497,159.806465 470.815762,186 438.5,186 C406.191342,186 380,159.801038 380,127.495103 L380,76 C380,70.3653268 383,69 383,69 Z"
                    />
                    <rect
                      className="midarmright"
                      width={33}
                      height={3}
                      x={542}
                      y="289.219"
                      fill="#EFC7B0"
                      transform="rotate(-15 558.5 290.72)"
                    />
                    <rect
                      className="midarmleft"
                      width={33}
                      height={3}
                      x="301.826"
                      y="289.219"
                      fill="#EFC7B0"
                      transform="scale(-1 1) rotate(-15 0 2708.645)"
                    />
                    <path
                      fill="#797A7D"
                      d="M332,351 L545,351 C545,351 545,356 545,359 C545,362 541,366 538,366 C535.334043,366 338.99422,366 338.99422,366 C336,366 332,362 332,359 L332,351 Z"
                    />
                    <rect
                      width={213}
                      height={135}
                      x={332}
                      y={216}
                      fill="#b8cfd4"
                      rx={16}
                    />
                    <ellipse
                      cx="479.255"
                      cy="146.894"
                      fill="#EED2C4"
                      transform="rotate(-30 479.255 146.647)"
                      rx="7.5"
                      ry="4.747"
                    />
                    <ellipse
                      cx="397.745"
                      cy="146.894"
                      fill="#EED2C4"
                      transform="scale(-1 1) rotate(-30 0 1631.052)"
                      rx="7.5"
                      ry="4.747"
                    />
                    <path
                      stroke="#E0ADA6"
                      strokeWidth={3}
                      d="M414,154 C414,154 424,162 439,162 C454,162 463,154 463,154"
                      strokeLinecap="round"
                    />
                    <path
                      fill="#E0ADA6"
                      d="M443,141.504272 C443,143.987194 440.980224,146 438.5,146 C436.014719,146 434,143.987566 434,141.504272 L434,129.995089 C434,128.893232 434.895858,128 435.997392,128 L441.002608,128 C442.105737,128 443,128.892623 443,129.995089 L443,141.504272 Z"
                    />
                    <circle
                      cx={465}
                      cy={126}
                      r={7}
                      fill="#FFFFFF"
                      opacity=".535"
                    />
                    <circle cx={465} cy={128} r={5} fill="#364F6B" />
                    <circle
                      cx={412}
                      cy={126}
                      r={7}
                      fill="#FFFFFF"
                      opacity=".535"
                    />
                    <circle cx={412} cy={128} r={5} fill="#364F6B" />
                    <rect
                      width={24}
                      height={6}
                      x="398.659"
                      y="109.038"
                      fill="#000000"
                      transform="rotate(-10 410.659 112.038)"
                      rx={3}
                    />
                    <rect
                      width={24}
                      height={6}
                      x="454.339"
                      y="109.038"
                      fill="#000000"
                      transform="rotate(10 466.339 112.038)"
                      rx={3}
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="snowflakes" aria-hidden="true">
            <div className="snowflake">&lt;p&gt;</div>
            <div className="snowflake">
              {"{"}opacity: 0.5;{"}"}
            </div>
            <div className="snowflake">
              {"{"}position: relative;{"}"}
            </div>
            <div className="snowflake">&lt;title&gt;</div>
            <div className="snowflake">&lt;img&gt;</div>
            <div className="snowflake">
              {"{"}transform: rotate(30deg);{"}"}
            </div>
            <div className="snowflake">&lt;h2&gt;</div>
            <div className="snowflake">
              {"{"}background-color: darkred;{"}"}
            </div>
            <div className="snowflake">
              {"{"}display: flex{"}"}
            </div>
            <div className="snowflake">&lt;head&gt;</div>
            <div className="snowflake">&lt;body&gt;</div>
            <div className="snowflake">&lt;script&gt;</div>
          </div>
        </div>
        <div className="BtnStartedMobile">
          <div
            className="getStartedBtn"
            onClick={() =>
              AboutMeRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="getStartedBtn__text">Let's get Started...</div>
            <div className="getStartedBtn__wrapper">
              <div className="getStartedBtn__arrow" />
              <div className="getStartedBtn__border-circle" />
              <div className="getStartedBtn__mask-circle">
                <div className="getStartedBtn__small-circle" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={AboutMeRef} className="About-me-sec">
        <AboutMe/>
      </section>
      <section ref={SkillsRef} className="Skills-sec">
        <Skills/>
      </section>
      <section ref={PortfolioRef} className="Portfolio-sec">
        Portfolio
      </section>
      <section ref={ContactmeRef} className="Contactme-sec">
        Contact me
      </section>
    </>
  );
}

export default MobileComponent;
