import React from "react";
import "./PortfolioStyle.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import IMG1 from '../Images/ThisWeb.jpg';
import IMG2 from '../Images/Restaurant.jpg';
import IMG3 from '../Images/VideoPlayer.jpg';
import IMG4 from '../Images/TodoList.jpg';
import IMG5 from '../Images/HTMLresume.jpg';
import IMG6 from '../Images/DiceGame.jpg';
import IMG7 from '../Images/Hostel.jpg';
import IMG8 from '../Images/Pong.jpg';
import IMG9 from '../Images/Calculator.jpg';

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
      ImgSrc: IMG2, 
      smallData: "simple restaurant website created in React with Login ID password fetched from API, with functionality of bookmark, add to favorites, and autocomplete search bar.",
      KeyPoints : ["React JS", "Responsive", "API fetched id/ps", "React Routing", "AutoComplete Searchbar", "Google data embeded studio", "CSS: BootStrap"],
      VisitLink : "https://restaurant-fb.onrender.com"
    },
    {
      Title: "Online VideoPlayer",
      ImgSrc: IMG3, 
      smallData: "online youtube look a like video player with sidebar of the playlist, video player is embeded iframe of youtube and playlist and thumbnail is fetcehd from API",
      KeyPoints : [ "React JS","Responsive", "API fetched playlist", "Youtube embeded Iframe" , "Dark Themne", "CSS: manual"],
      VisitLink : "https://github.com/fbpatel003/video-player"
    },
    {
      Title: "ToDo List",
      ImgSrc: IMG4, 
      smallData: "A toDo list app created in react, with adding a new list, editing and showing all todos funtionality and 4 input data fields which includes date input too.",
      KeyPoints : ["React JS", "Responsive", "local Storgae", "editing any list" , "4 input fields", "CSS: BootStrap"],
      VisitLink : "https://todolist-fb.onrender.com"
    },
    {
      Title: "HTML Resume",
      ImgSrc: IMG5, 
      smallData: "An Elegent looking colorfull self resume website created with just normal HTML & CSS file, website is fast loading one with a necessary data only.",
      KeyPoints : ["HTML CSS", "CSS: Manual"],
      VisitLink : "https://fenilbabariyaresume.herokuapp.com/"
    },
    {
      Title: "Dice Game",
      ImgSrc: IMG6, 
      smallData: "A simple dice gusseing game where player guess the dice side while dice is rolling and if player guesses correct then he or she gets 1 point.",
      KeyPoints : ["HTML CSS JavaScript", "Proper working functionality", "0 lagging", "CSS: Manual"],
      VisitLink : "https://dice-game-fb.herokuapp.com/"
    },
    {
      Title: "Hostel Management System",
      ImgSrc: IMG7, 
      smallData: "A Database management system which tracks and keeps data of hostel students in SQL database, we can add, remove, see any student's data by their specific primary key column.",
      KeyPoints : ["JAVA SQL", "NetBeans", "MySQL secure connection", "JavaSwing", "fully funtional with database"],
      VisitLink : "https://github.com/fbpatel003/Hostel-Management-System"
    },
    {
      Title: "Pong Game",
      ImgSrc: IMG8, 
      smallData: "This is a two-player game in which players need to touch the ball with the paddle if the ball will not touch the paddle then the other player will get numbers and vice versa.",
      KeyPoints : ["JAVA","JavaSwing", "MultiPlayer", "Score COunting"],
      VisitLink : "https://github.com/fbpatel003/PONG-GAME-JAVA"
    },
    {
      Title: "Calculator",
      ImgSrc: IMG9, 
      smallData: "This is a simple calculator which has 23 button including numericals, arithmatic, sqrt, sqr, 1/x and also Dark mode button.",
      KeyPoints : ["JAVA","JavaSwing", "Fully Funtional", "Dark Mode switch"],
      VisitLink : "https://github.com/fbpatel003/Calculator-With-Dark-Mode"
    },
  ]

  return (
    <>
      <h1 className="TitleAboutMe">Portfolio</h1>
 
      <Box style={{maxHeight: 600, overflow: 'auto'}} className="ProjectBox" sx={{ flexGrow: 1 }}>
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
