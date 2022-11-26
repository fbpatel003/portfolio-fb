import React from "react";
import "./AboutMeStyle.css";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import IMG from "../Images/IMG_414323.jpg";

function AboutMe(props) {
  return (
    <>
      <h1 className="TitleAboutMe">About Me</h1>
      <Box className="InfoBox" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid className="MyPhoto" xs={12} md={6}>
            <img src={IMG} alt="Profile Image" className="ProfileImg" />
          </Grid>
          <Grid className="MyInfo" xs={12} md={6}>
            <div className="who">Who is this guy..?!</div>
            <div className="flux">Fenil Patel </div>
            <div className="my-Info">
              An Engineer graduated with Electricals' Degree, More than three
              years of experience in the industry, Involved in Team management
              and Project Management.
              <br /> <br />I have serious passion for UI effects, animations and
              creating intuitive, dynamic user experiences.
              <span className="Blue"> Let's make something special. </span>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box className="IconBox" sx={{ width: "98%" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={12}>
            <div className="IconList LinkedINList">
              <a href="https://www.linkedin.com/mwlite/in/fenil-patel-a8545b197" target="_blank" className="IconLink">
                <span className="Linked Icon"></span>
              </a>
            </div>
            <div className="IconList GitHubList">
              <a href="https://github.com/fbpatel003?tab=repositories" target="_blank" className="IconLink">
                <span className="Git Icon"></span>
              </a>
            </div>
            <div className="IconList LeetCodeList">
              <a href="https://leetcode.com/fb_patel/" target="_blank" className="IconLink">
                <span className="Leet Icon"></span>
              </a>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AboutMe;
