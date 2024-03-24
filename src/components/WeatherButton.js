import React from "react";

const WeatherButton = ({ cities, handleCityChange, selectedCity }) => {
  return (
    <div className="city-name">
      <button
        type="button"
        onClick={() => handleCityChange("current")}
        className={selectedCity === "" ? "active" : ""}
      >
        Current Location
      </button>
      {cities.map((item, index) => (
        <button
          type="button"
          key={index}
          onClick={() => handleCityChange(item)}
          className={selectedCity === item ? "active" : ""}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default WeatherButton;
