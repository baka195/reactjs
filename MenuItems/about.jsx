import React from 'react';
import greece from './greece.svg';
import HeadHero from "../Head/headhero.jsx";

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeadHero head_2={"ABOUT ME"} head_3={"REAM MORE"} />
                <Tree />
                <Map />
            </React.Fragment>
        );
    }
}

function Tree(){
    return(
        <div className="JV--company--tree">
            <div className="JV--c--box JV--row">
                <div className="JV--c--piece JV--c--piece--2">
                    <ul className="JV--row">
                        <li><span className="JV--700">24</span><h4 className="JV--green JV--700">PROJECTS</h4></li>
                        <li><span className="JV--700">27</span><h4 className="JV--green JV--700">YEARS OLD</h4></li>
                    </ul>
                    <p>My name is Kostas Bakatselos. As a Frontend Developer &amp; Backend Developer I am here to make you stand out in the digital world.
                    The combination of my passion for development and your vision will ensure a great end result. Full Stack Web Developer | Programmer | Joomla, Laravel, CodeIgniter &amp; ReactJS Fan</p>
                    <h4>Current positions:</h4>
                    <div className="pos pos__1">Full Stack Developer at <span>overmedia.sa</span></div>
                    <div className="pos pos__2">Freelance Web Developer at <span>hextekdesign</span></div>
                </div>
                <div className="JV--c--piece JV--c--piece--1 JV--bpc JV--btlp JV--back--cred"></div>
            </div>
        </div>        
    );
}

function Map(){
    return(
        <div className="JV--map">
            <div className="JV--map--tree JV--row JV--a--center">
                
                <div className="JV--MTX">
                    <h3 className="JV--700">WHERE I'M LOCATED</h3>
                    <h4 className="JV--700">ATHENS, GREECE</h4>
                </div>
                <div className="JV--greece">
                    <div className="JV--dot JV--dot--1"></div>
                    <div className="JV--ring JV--ring--1"></div>
                    <img src={greece} alt="Greece"/>
                </div>
            </div>
        </div>
    );

}

export default About;