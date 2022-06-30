import React from 'react';
import RI1 from './ri1.png';
import RI2 from './ri2.png';
import './codefile.css';

class CodeFile extends React.Component {
    state = {  }
    render() { 
        return (
            <div className="x--code">
                <div className="x--code--box"><img src={RI1} alt="reactselect1" /></div>
                <div className="x--code--box"><img src={RI2} alt="phpcode_1" /></div>
            </div>
        );
    }
}
 
export default CodeFile;