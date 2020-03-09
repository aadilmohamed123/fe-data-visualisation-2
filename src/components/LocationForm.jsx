import React from "react";

const LocationForm = props => {
  console.log(props);

  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Enter your location:
        <input type="text" onChange={props.handleChange} />
        <button>Search</button>
      </label>
    </form>
  );
};

export default LocationForm;
