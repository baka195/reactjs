import React from 'react';

class Worker extends React.Component{

    render(){
        const header__work = <div className="header"><h2>WORK</h2><h3>WITH ME</h3></div>;
        return(
            <React.Fragment>
                {header__work}
                <div className="open--to--work">
                    <span className="green"></span>
                    <h2>Available to work with you</h2>
                </div>
            </React.Fragment>
        );
    }

}

export default Worker;