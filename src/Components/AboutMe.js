import React from "react";
import "./AboutMeStyle.css";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import IMG from "../Images/IMG_4143.jpg";

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
            <div class="flux">Fenil Patel </div>
            <div className="my-Info">
              An Engineer graduated with Electricals' Degree, More than three
              years of experience in the industry, Involved in Team management
              and Project Management.
              <br /> <br />
              I have serious passion for UI effects, animations and creating intuitive,
              dynamic user experiences. 
              <span className="Blue"> Let's make something special. </span>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AboutMe;
