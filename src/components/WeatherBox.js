import React from "react";
import { ClipLoader } from "react-spinners";

const WeatherBox = ({ weather, loading, errorApi }) => {
  return loading ? (
    <div className="weather-box">
      <ClipLoader color="#fff" size={100} />
    </div>
  ) : !errorApi ? (
    <div className="weather-box">
      <div>{weather?.name?.toUpperCase()}</div>
      <div>{Math.floor(weather?.main?.temp)} &#8451;</div>
      <div>{weather?.weather[0]?.description}</div>
    </div>
  ) : (
    errorApi
  );
};

export default WeatherBox;
