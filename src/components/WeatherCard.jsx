import React from "react";

function fToC(fahrenheit) {
  const fTemp = fahrenheit;
  const fToCel = ((fTemp - 32) * 5) / 9;
  const message = fTemp + "\xB0F is " + fToCel + "\xB0C.";
  console.log(message);
  return Math.round(fToCel) + "\xB0C.";
}

const WeatherCard = props => {
  const {
    name,
    main: { temp, feels_like },
    weather
  } = props;
  const { main, description } = weather[0];
  return (
    <section className="mainInfo">
      <h1> {name}'s Weather</h1>
      <h2>
        {main}: {description}
      </h2>
      <h3>Temperature: {fToC(temp)}</h3>
      <h3>Real feel: {fToC(feels_like)}</h3>
    </section>
  );
};

export default WeatherCard;
