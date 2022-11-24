import React from "react";
import "./SkillsStyle.css";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

function Skills() {
  return (
    <>
      <h1 className="TitleAboutMe">Skills</h1>
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
      <Box className="SkillBox" sx={{ width: "98%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid className="SkillName" xs={4} md={2}>
            React Js
          </Grid>
          <Grid className="SkillProgress" xs={8} md={4}>
            <div className="progress">
              <div className="progress-value react"></div>
            </div>
          </Grid>
          <Grid className="SkillName" xs={4} md={2}>
            javaScript
          </Grid>
          <Grid className="SkillProgress" xs={8} md={4}>
            <div className="progress">
              <div className="progress-value javaScript"></div>
            </div>
          </Grid>
          <Grid className="SkillName" xs={4} md={2}>
            Java
          </Grid>
          <Grid className="SkillProgress" xs={8} md={4}>
            <div className="progress">
              <div className="progress-value java"></div>
            </div>
          </Grid>
          <Grid className="SkillName" xs={4} md={2}>
            Html
          </Grid>
          <Grid className="SkillProgress" xs={8} md={4}>
            <div className="progress">
              <div className="progress-value Html"></div>
            </div>
          </Grid>
          <Grid className="SkillName" xs={4} md={2}>
            Css
          </Grid>
          <Grid className="SkillProgress" xs={8} md={4}>
            <div className="progress">
              <div className="progress-value Css"></div>
            </div>
          </Grid>
          <Grid className="SkillName" xs={4} md={2}>
            MySql
          </Grid>
          <Grid className="SkillProgress" xs={8} md={4}>
            <div className="progress">
              <div className="progress-value Sql"></div>
            </div>
          </Grid>
          <Grid className="SkillName" xs={4} md={2}>
            BootStrap
          </Grid>
          <Grid className="SkillProgress" xs={8} md={4}>
            <div className="progress">
              <div className="progress-value Bootstrap"></div>
            </div>
          </Grid>
          <Grid className="SkillName" xs={4} md={2}>
            MUI
          </Grid>
          <Grid className="SkillProgress" xs={8} md={4}>
            <div className="progress">
              <div className="progress-value Mui"></div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Skills;
