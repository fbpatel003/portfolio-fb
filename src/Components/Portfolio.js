import React from "react";
import "./PortfolioStyle.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

function Portfolio() {
  return (
    <>
      <h1 className="TitleAboutMe">Portfolio</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <div className="card">
              <div className="card__side card__side--front-1">
                <img
                  className="ProjectImg"
                  src={require("../Images/IMAGE.jpg")}
                  alt=""
                />
                <div className="ProjectTitle">This Website Itself</div>
                <p className="smallData">
                  A personal website with all the resume data, skills, contact
                  details and portfolio of all projects. created using ReactJs
                  and MUI css framework.
                </p>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <ul class="KeyPointslist">
                  <li className="ListPoint" >Responsive</li>
                  <li className="ListPoint" >Well Designed</li>
                  <li className="ListPoint" >Fast Loading</li>
                  <li className="ListPoint">structured components </li>
                  <li className="ListPoint">CSS: MUI</li>
                  <li className="ListPoint" >Optimized for all devices</li>
                </ul>
                <a href="#popup" className="btn btn--white">
                  Visit &nbsp;
                  <OpenInNewRoundedIcon fontSize="small" />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Portfolio;
