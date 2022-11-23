import React from "react";
import "./AboutMeStyle.css";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

function AboutMe() {
  return (
    <>
      <h1 className="TitleAboutMe">About Me</h1>
      <Box className="InfoBox" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid className="AboutMySelf" xs={12} md={6}>
          </Grid>
          <Grid className="" xs={12} md={6}>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AboutMe;
