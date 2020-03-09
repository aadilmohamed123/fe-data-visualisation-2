import "./App.css";
import LocationForm from "./components/LocationForm";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <h1>What Weather U Want?</h1>
        <LocationForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
  handleChange = e => {
    console.log(e.target.value);
    this.setState({ newCity: e.target.value });
  };
  handleSubmit = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&&appid=44a29f02dde67ea362372acd6d5bc7d8`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ weatherInfo: data.weather });
      });
  };
}

export default App;
