import React from "react";
import { Link } from "react-router-dom";
import HeadHero from '../Head/headhero.jsx';
import cable from "./cable.svg";
import covidcap from './covid.svg';
import codepic from './code.svg';

class Playground extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeadHero head_2={"PLAYGROUND"} head_3={"GET THE CODE"} />
        <div className="JBK--projects JV--row">
          <a href="https://codepen.io/baka195/pen/xxrqRPV" target="_blank" rel="noreferrer" className="JBK--project--box JBK--project--ground __c1">
            <span>Animation Button | CableHero</span>
            <img src={cable} alt="Animation Button | CableHero" />
            <div className="t__get">codepen.io</div>
            <h3>HTML, CSS, JS</h3>
          </a>
          <Link to="/covid" className="JBK--project--box JBK--project--ground __c2">
            <span>Covid 19 | CovidHero</span>
            <img src={covidcap} alt="Covid 19" />
            <div className="t__get">covid.app</div>
            <h3>ReactJS, RapidApi</h3>
          </Link>
          <Link to="/codefiles" className="JBK--project--box JBK--project--ground __c1">
            <span>Code Files</span>
            <img src={codepic} alt="Code Files" />
            <div className="t__get">my code</div>
            <h3>∞</h3>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Playground;