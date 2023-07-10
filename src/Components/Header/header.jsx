import React from "react";
import { BsGithub } from "react-icons/bs";
import "./header.css";
import DateTime from "../../Pages/FrontPage/date_time";
import Search from "../Search/search";
import CurrentLocation from "../Current-weather/current-weather";
const Header = () => {
  return (
    <>
        <div className="header">
            <DateTime />
            <Search />
            <h1 className="head">Theme</h1>
            <div className="github-link">
                <a href="https://www.youtube.com/"><BsGithub className="git-icon"/></a>
            </div>
        </div>

        <CurrentLocation />        
    </>
  )
}

export default Header