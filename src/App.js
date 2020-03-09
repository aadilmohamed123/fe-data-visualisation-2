import "./App.css";
import LocationForm from "./components/LocationForm";
import React, { Component } from "react";
import WeatherCard from "./components/WeatherCard";

class App extends Component {
  state = { weatherInfo: "" };
  render() {
    return (
      <>
        <h1>What Weather U Want?</h1>
        <LocationForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <WeatherCard {...this.state.weatherInfo} />
      </>
    );
  }
  handleChange = e => {
    console.log(e.target.value);
    this.setState({ newCity: e.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
  };

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&&appid=44a29f02dde67ea362372acd6d5bc7d8`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ weatherInfo: data });
      });
  }
}

export default App;
