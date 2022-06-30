import React, { Component } from "react";

class Project extends Component {
  state = {
    bookname: this.props.name,
    url: "https://" + this.props.name,
    style: {
      backgroundColor: this.props.color,
    },
    type: this.props.type,
    vector: this.props.vector,
    tech: this.props.tech,
  };

  render() {
    return (
      <a href={this.state.url} target="_blank" rel="noreferrer" style={this.state.style} className="JBK--project--box">
        <span>{this.state.tech}</span>
        <img src={this.state.vector} alt={this.state.bookname} />
        <div class="t__get">
          {this.state.bookname}
        </div>
        <h3>{this.state.type}</h3>
      </a>
    );
  }
}

export default Project;