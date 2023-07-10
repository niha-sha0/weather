import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { BsSunFill } from "react-icons/bs";
import "./sunrise-sunset.css";
function SunInfo()
{
    const city1 = "New York, London";
/*
    const [city1Data, setCity1Data] = useState({});

    const setCity1 = () => {
        fetch(`${api.base}weather?q=${city1}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setCity1Data(result);
        })
    };
*/
  return (
    <>
        {/* Sunrise and Sunset Information */}
        <div className="sun_information">
            <div className="headear">
                <h2 className="sun">
                    Sunrise & Sunset
                    <IoMdAddCircle className="add_icon"  />
                </h2>
            </div>
            <div className="sunrise_sunset">
            <div className="current_location">
                <MdOutlineLocationOn className="location_icon" />
                {/*<p className="location_text">{city1Data.name}</p>*/}
            </div>
            <div className="sunrise_sunset_icon">
                <BsSunFill className="sun_icon"/>
                <div className="sunrise">
                    <p>Sunrise</p>
                    {/*<p className="sunrise_text">{new Date(weather.sys.sunrise * 1000).toLocaleTimeString([],  {hour: '2-digit', minute:'2-digit'})}</p>*/}
                </div>
                <BsFillMoonStarsFill className="moon_icon" />
                <div className="sunset">
                    <p>Sunset</p>
                    {/*<p className="sunset_text">{new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>*/}
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default SunInfo;