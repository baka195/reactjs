import React from "react";

class BottomHero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="bottom JV--row">
          <div className="fd JV--row JV--a--center">FRONTEND DEVELOPER</div>
          <div className="bd JV--row JV--a--center">BACKEND DEVELOPER</div>
        </div>
        <footer>&#169; 2022 kostas.bakatselos all rights reserved</footer>
      </React.Fragment>
    );
  }
}

export default BottomHero;