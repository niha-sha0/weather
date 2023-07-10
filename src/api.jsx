export const geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "104449e3d9mshde41e98ba0c32c3p1df02djsn8fdb5991f3c7",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  
  export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  export const WEATHER_API_KEY = "e705fbfcf48b118ee65753a961895863";

  export async function fetchCities(input) {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
        GEO_API_OPTIONS
      );
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  }