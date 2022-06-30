import React from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "./fireconfig";
import HeadHero from '../Head/headhero.jsx';
import CodeBox from "./codebox";

class Coding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      bee: ""
    };
    this.HeroClipBoard = this.HeroClipBoard.bind(this);
  }

  async componentDidMount() {
    const q = query(collection(db, "tech_table"));
    const document = await getDocs(q);
    const studentList = [];

    document.forEach((doc) => {
      studentList.push({ identity: doc.id, content: doc.data() });
    });

    this.setState({ courses: studentList });
  }

  HeroClipBoard(event) {
    this.setState(
      {
        bee: event.target.value.toUpperCase(),
      },
      () => {
        const rockboxes = document.querySelectorAll(".JBK--tech--box");
        Array.from(rockboxes).forEach((rockbox) => {
          if (event.target.value !== "") {
            let bee = rockbox.innerHTML;
            if (!bee.includes(this.state.bee) && this.state.bee !== "") {
              rockbox.style.display = "none";
            } else {
              rockbox.style.display = "block";
            }
          } else {
            rockbox.style.display = "block";
          }
        });
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <HeadHero head_2={"CODING"} head_3={"16 ITEMS"} />
        <input
          type="text"
          style={{textTransform:"uppercase"}}
          className="pr__search"
          placeholder="SEARCH . . ."
          defaultValue={this.state.bee} onChange={this.HeroClipBoard}
        />
        <div className="JBK--tech JV--row">
          {this.state.courses.map((tool) => (
            <CodeBox key={tool.identity} name={tool.content.name} type={tool.content.type} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Coding;