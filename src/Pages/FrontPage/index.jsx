import { BsFillPersonFill } from "react-icons/bs";
import "./index.css";
import DateTime from "./date_time";
import Search from "../../Components/Search/search";
import Header from "../../Components/Header/header";
import backgroundImage from "../../assets/bg.svg";

function Front()
{
    
   
    return(
        <>
            <div className="main_container">
                <Header />








                {/*<div className="nav_items">
                    <DateTime className="date_time" />
                    
                    <div className="search_bar">
                        {/*<button className="search_button" type="submit">
                            <BiSearchAlt2 />
                        </button>
    
                        <input 
                            id="city"
                            className="search" 
                            type="text" 
                            placeholder="Search for cities"
                        /> 
                            <AsyncPaginate
                                placeholder="Search for city"
                                debounceTimeout={600}
                                className="search"
                            />*/}
                           {/*<Search className="search_menu"/>
                    </div>
                    </>
                    {/*<BsFillPersonFill className="login_option"/>*/}
                {/*</div>
               {/* <ul className="temperature_cards">
                    <li className="temp_items">Monday</li>
                    <li className="temp_items">Tuesday</li>
                    <li className="temp_items">Wednesday</li>
                    <li className="temp_items">Thursday</li>
                    <li className="temp_items">Friday</li>
                    <li className="temp_items">Saturday</li>
                    <li className="temp_items">Sunday</li>
                </ul>
                

                <div className="weather_info">
                    <div className="air_or_rainfall">
                        {/* Air Quality Information */}
                       {/* <div className="air_quality_card">
                            <h2 className="air">Air Quality Index</h2>
                        </div>
                        
                        {/* Rainfall Information */}
                        {/*<div className="rainfall_container">
                            <h2 className="rain">Monthly Rainfall</h2>
                        </div>
                        
                        </div>

                    <CurrentWeather />
                        
                    </div>*/}
            </div>  
        </>
    );
}
 
export default Front;