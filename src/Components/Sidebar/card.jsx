import React from 'react'
import { WiDayLightWind } from "react-icons/wi";
import { MdOutlineDashboard, MdSettingsApplications } from "react-icons/md";
import { BsPinMapFill } from "react-icons/bs";
import { FaSignal, FaCalendarCheck } from "react-icons/fa";
import "./card.css";

function Sidebar() {
  return (
    <div className="weather_card">
        <div className="weather">
          <WiDayLightWind className="weather_icon" />
          <h1 className="weather_text">Weather</h1>
        </div>

        <ul className="weather_list">
          <li className="list_items">
            <MdOutlineDashboard className="weather_icon_list" />
            <h4 className="weather_text_h4">Dashboard</h4>
          </li>
          
          <li className="list_items">
            <FaSignal className="weather_icon_list" />
            <h4 className="weather_text_h4">Statistics</h4>
          </li>
      
          <li className="list_items">
            <BsPinMapFill className="weather_icon_list" />
            <h4 className="weather_text_h4">Map</h4>
          </li>
   
          <li className="list_items">
            <FaCalendarCheck className="weather_icon_list" />
            <h4 className="weather_text_h4">Calendar</h4>
          </li>
      
          <li className="list_items">
            <MdSettingsApplications className="weather_icon_list" />
            <h4 className="weather_text_h4">Settings</h4>
          </li>
        
        </ul>

    </div>

  )
}

export default Sidebar

