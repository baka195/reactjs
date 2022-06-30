import React from "react";

class CodeBox extends React.Component {
  state = {
    t__name: this.props.name,
    t__type: this.props.type
  };

  render() {
    return (
      <div className="JBK--tech--box">
        <div className="check"></div>
        <span>{this.state.t__type}</span>
        <h2>{this.state.t__name}</h2>
        <p>__</p>
      </div>
    );
  }
}

export default CodeBox;