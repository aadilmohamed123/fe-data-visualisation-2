import React, { Component } from "react";

class LoadingIndicator extends Component {
  render() {
    return (
      <div className="main">
        <div id="circle" className="circle">
          <img
            id="earthy"
            className="earth"
            src="http://www.myiconfinder.com/uploads/iconsets/bd39f056a48a27fc4e53904e86bc254a-globe.png"
            alt=""
          />
        </div>
      </div>
    );
  }

}

export default LoadingIndicator;
