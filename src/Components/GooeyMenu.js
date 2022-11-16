import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
 
function GooeyMenu() {
  return (   
    <div>
  {/* <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" /> */}
  <nav className="menu">
    <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
    <label className="menu-open-button" htmlFor="menu-open">
      <span className="hamburger hamburger-1" />
      <span className="hamburger hamburger-2" />
      <span className="hamburger hamburger-3" />
    </label>
    <a href="#" className="menu-item"> <ContactsRoundedIcon className="GooeyIcon" fontSize="large" /> </a>
    <a href="#" className="menu-item"> <BusinessCenterRoundedIcon className="GooeyIcon" fontSize="large" /> </a>
    <a href="#" className="menu-item"> <TipsAndUpdatesRoundedIcon className="GooeyIcon" fontSize="large" /> </a>
    <a href="#" className="menu-item"> <PersonRoundedIcon className="GooeyIcon" fontSize="large" /> </a>
    <a href="#" className="menu-item"> <HomeRoundedIcon className="GooeyIcon" fontSize="large"/> </a>
  </nav>
  {/* filters */}
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="shadowed-goo">
        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={10} />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        <feGaussianBlur in="goo" stdDeviation={3} result="shadow" />
        <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
        <feOffset in="shadow" dx={1} dy={1} result="shadow" />
        <feBlend in2="shadow" in="goo" result="goo" />
        <feBlend in2="goo" in="SourceGraphic" result="mix" />
      </filter>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={10} />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        <feBlend in2="goo" in="SourceGraphic" result="mix" />
      </filter>
    </defs>
  </svg>
</div>

    );
}

export default GooeyMenu;
