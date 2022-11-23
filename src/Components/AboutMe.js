import React from "react";
import "./AboutMeStyle.css";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

function AboutMe() {
  return (
    <>
      <h1 className="TitleAboutMe">About Me</h1>
      <Box className="responsiveBoxSpeciality" sx={{ width: "98%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6} md={3}>
            <div className="specialityBox">
              <SpeedRoundedIcon
                className="specialityIcon"
                sx={{ fontSize: 80 }}
              />
              <div className="SpecialityName"> Fast </div>
              <p className="paragraphSpeciality">
                Fast load times and lag free interaction, my highest priority.
              </p>
            </div>
          </Grid>
          <Grid xs={6} md={3}>
            <div className="specialityBox">
              <DevicesRoundedIcon
                className="specialityIcon"
                sx={{ fontSize: 80 }}
              />
              <div className="SpecialityName"> Responsive </div>
              <p className="paragraphSpeciality">
                My layouts will work on any device, big or small.
              </p>
            </div>
          </Grid>
          <Grid xs={6} md={3}>
            <div className="specialityBox">
              <EmojiObjectsRoundedIcon
                className="specialityIcon"
                sx={{ fontSize: 80 }}
              />
              <div className="SpecialityName"> Intuitive </div>
              <p className="paragraphSpeciality">
                Strong preference for easy to use, intuitive UX/UI.
              </p>
            </div>
          </Grid>
          <Grid xs={6} md={3}>
            <div className="specialityBox">
              <RocketLaunchRoundedIcon
                className="specialityIcon"
                sx={{ fontSize: 80 }}
              />
              <div className="SpecialityName"> Dynamic </div>
              <p className="paragraphSpeciality">
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AboutMe;
