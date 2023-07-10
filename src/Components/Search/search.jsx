import React, { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import "./search.css";

const api = {
  key: "e705fbfcf48b118ee65753a961895863",
  base: "https://api.openweathermap.org/data/2.5/",
}

const Search = () => {

  const [searchCity, setSearch] = useState("");

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${searchCity}&units=metric&APPID=${api.key}`)
    //fetch(`${api.base}weather?&units=metric&lat=${coord.latitude}&lon=${coord.longitude}&appid=${api.key}`)
    .then((res) => res.json())
    .then((results) => {
      console.log(results);
    })
  }

  return (
    <>
      <div className="search_bar">
        <button className="search_button" onClick={searchPressed} type="submit">
          <FaSearchLocation />
        </button>
        <input 
          id="city"
          className="search" 
          type="text" 
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for cities"
        />
      </div>
    </>
  );
};

export default Search;