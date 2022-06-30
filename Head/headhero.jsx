import React , {Component} from "react";

class HeadHero extends Component {
  state = {
    header_2: this.props.head_2,
    header_3: this.props.head_3,
  };

  render() {
    return (
      <div className="header">
        <h2>{this.state.header_2}</h2>
        <h3>{this.state.header_3}</h3>
      </div>
    );
  }
}

export default HeadHero;