import React from "react";
import "./forecast.css";
import { Accordion, AccordionItem, AccordionItemHeading } from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

    const dayInAWeek = newDate().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    <>
        <Accordion>
            {data.list.splice(0, 7).map((item, idx) => (
            <AccordionItem>
                <AccordionItemHeading>
                    <div className="daily-item">
                        <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                        <label className="day">{forecastDays[idx]}</label>
                        <label className="description">{item.weather[0].description}</label>
                        <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                        <label>{item.main.feels_like}°C</label>
                    </div>
                </AccordionItemHeading>
            </AccordionItem>
        ))}
        </Accordion>
    </>
  )
}

export default Forecast;