import React from "react";
import "./PortfolioStyle.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import IMG1 from '../Images/IMAGE.jpg';

function Portfolio() {

  const AllProjects = [
    {
      Title: "This Website itself",
      ImgSrc: IMG1,
      smallData: "A personal website with all the resume data, skills, contact details and portfolio of all projects. created using ReactJs and MUI css framework.",
      KeyPoints : ["React JS", "Responsive", "Well Designed", "Fast Loading", "structured components", "CSS: MUI", "Optimized for all devices"],
      VisitLink : "https://portfolio-fb.onrender.com/"
    },
    {
      Title: "Restaurant Homepage",
      ImgSrc: IMG1, 
      smallData: "simple restaurant website created in React with Login ID password fetched from API, with functionality of bookmark, add to favorites, and autocomplete search bar.",
      KeyPoints : ["React JS", "Responsive", "API fetched id/ps", "React Routing", "AutoComplete Searchbar", "Google data embeded studio", "CSS: BootStrap"],
      VisitLink : "https://restaurant-fb.onrender.com"
    },
    {
      Title: "Online VideoPlayer",
      ImgSrc: IMG1, 
      smallData: "online youtube look a like video player with sidebar of the playlist, video player is embeded iframe of youtube and playlist and thumbnail is fetcehd from API",
      KeyPoints : [ "React JS","Responsive", "API fetched playlist", "Youtube embeded Iframe" , "Dark Themne", "CSS: manual"],
      VisitLink : "https://github.com/fbpatel003/video-player"
    },
    {
      Title: "ToDo List",
      ImgSrc: IMG1, 
      smallData: "A toDo list app created in react, with adding a new list, editing and showing all todos funtionality and 4 input data fields which includes date input too.",
      KeyPoints : ["React JS", "Responsive", "local Storgae", "editing any list" , "4 input fields", "CSS: BootStrap"],
      VisitLink : "https://todolist-fb.onrender.com"
    },
  ]

  return (
    <>
      <h1 className="TitleAboutMe">Portfolio</h1>
 
      <Box className="ProjectBox" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {
            AllProjects.map((el)=>{
              return(
                <Grid key={el.Title} item xs={6} sm={4} md={3}>
                <div className="card">
                  <div className="card__side card__side--front-1">
                    <img
                      className="ProjectImg"
                      src={el.ImgSrc}
                      alt={el.Title}
                    />
                    <div className="ProjectTitle">{el.Title}</div>
                    <p className="smallData">{el.smallData}</p>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <ul className="KeyPointslist">
                      {
                        el.KeyPoints.map((points)=>{
                          return(
                            <li key={points} className="ListPoint" >*{" "}{points}</li>
                          )
                        })
                      }
                    </ul>
                    <a href={el.VisitLink} target="_blank" className="btn btn--white">
                      Visit &nbsp;
                      <OpenInNewRoundedIcon fontSize="small" />
                    </a>
                  </div>
                </div>
              </Grid>
              )
            })
          }
        </Grid>
      </Box>
    </>
  );
}

export default Portfolio;
