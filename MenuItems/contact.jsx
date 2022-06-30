import React from 'react';
import HeadHero from '../Head/headhero.jsx';

class Contact extends React.Component{

    render(){
        return(
            <React.Fragment>
                <HeadHero head_2={"CONTACT"} head_3={"GET IN TOUCH"} />
                <ul className="JBK--contact">
                    <li>kbakatselos@gmail.com</li>
                    <li>697 87 13 574</li>
                </ul>
                <div className="social social__2 JV--row">
                    <a href="https://www.linkedin.com/in/kostas-bakatselos-0b51ba165/" target="_blank" rel="noreferrer"><svg x="0" y="0" viewBox="0 0 682.66669 682"><g><path d="m77.613281-.667969c-46.929687 0-77.613281 30.816407-77.613281 71.320313 0 39.609375 29.769531 71.304687 75.8125 71.304687h.890625c47.847656 0 77.625-31.695312 77.625-71.304687-.894531-40.503906-29.777344-71.320313-76.714844-71.320313zm0 0" fill="#191a1e" data-original="#000"></path><path d="m8.109375 198.3125h137.195313v412.757812h-137.195313zm0 0" fill="#191a1e" data-original="#000000"></path><path d="m482.054688 188.625c-74.011719 0-123.640626 69.546875-123.640626 69.546875v-59.859375h-137.199218v412.757812h137.191406v-230.5c0-12.339843.894531-24.660156 4.519531-33.484374 9.917969-24.640626 32.488281-50.167969 70.390625-50.167969 49.644532 0 69.5 37.851562 69.5 93.339843v220.8125h137.183594v-236.667968c0-126.78125-67.6875-185.777344-157.945312-185.777344zm0 0" fill="#191a1e" data-original="#000"></path></g></svg></a>
                </div>
            </React.Fragment>
        );
    }

}

export default Contact;