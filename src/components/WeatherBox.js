import React from "react";
import { ClipLoader } from "react-spinners";

const WeatherBox = ({ weather, loading }) => {
  return loading ? (
    <div className="weather-box">
      <ClipLoader color="#fff" size={100} />
    </div>
  ) : (
    <div className="weather-box">
      <div>{weather?.name.toUpperCase()}</div>
      <div>{weather?.main.temp} &#8451;</div>
      <div>{weather?.weather[0].description}</div>
    </div>
  );
};

export default WeatherBox;
