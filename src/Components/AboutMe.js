import React from "react";
import "./AboutMeStyle.css";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

function AboutMe() {
  return (
    <>
    <h1 className="TitleAboutMe">About Me</h1>
      <Box className="responsiveBoxSpeciality" sx={{ width: "98%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6} md={3}>
            <div className="specialityBox"></div>
          </Grid>
          <Grid xs={6} md={3}>
            <div className="specialityBox"></div>
          </Grid>
          <Grid xs={6} md={3}>
            <div className="specialityBox"></div>
          </Grid>
          <Grid xs={6} md={3}>
            <div className="specialityBox"></div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AboutMe;
