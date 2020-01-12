import React from 'react';
import './now.css'

import Fade from 'react-reveal/Fade'

const Now = ({onRouteChange}) => {
    return (
        <div className="buy_now">
            <Fade bottom>
                <div className="content">
                    <h3>Fill the form below</h3>
                    <p>All fields are required</p>
                    <div className="form">
                        <input placeholder="Lastname"/>
                        <input placeholder="Firstname"/>
                        <input placeholder="Email"/>
                        <input placeholder="Phone no"/>
                        <input placeholder="Delivery address"/>
                    </div>
                    <div className="cta">
                        <button onClick={()=>onRouteChange('details')} className="back">CANCEL</button>
                        <button>CONFIRM</button>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Now;