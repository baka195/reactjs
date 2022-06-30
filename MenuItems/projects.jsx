import React, { Component } from "react";
import Project from "./project.jsx";
import data from "./bookstore.json";
import HeadHero from '../Head/headhero.jsx';

class Projects extends Component {
  state = {
    bookstore: data.products,
    booksize: data.products.length
  };

  render() {
    return (
      <React.Fragment>
        <HeadHero head_2={"PORTFOLIO"} head_3={ this.state.booksize + " PROJECTS"} />
        <div className="JBK--projects JV--row">
          {this.state.bookstore.map((book) => (
            <Project
              key={book.id}
              name={book.name}
              color={book.color_class}
              type={book.type}
              vector={book.vector}
              tech={book.tech} selected={true}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
