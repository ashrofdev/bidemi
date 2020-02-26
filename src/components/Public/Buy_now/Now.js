import React from 'react';
import './now.css'

import Fade from 'react-reveal/Fade'

const Now = ({onRouteChange, saveData, popUp}) => {
    
    return (
        <div className="buy_now">
            <Fade bottom>
                <div className="content">
                    <h3>Fill the form below</h3>
                    <p>All fields are required</p>
                    <div className="form">
                        <input className="lastname" placeholder="Lastname"/>
                        <input className="firstname" placeholder="Firstname"/>
                        <input className="mail" type="email" placeholder="Email"/>
                        <input className="phone" type="number" placeholder="Phone no"/>
                        <input className="address" placeholder="Delivery address"/>
                    </div>
                    <div className="cta">
                        <button onClick={()=>onRouteChange('details')} className="back">CANCEL</button>
                        <button onClick={saveData}>CONFIRM</button>
                    </div>
                </div>
            
            </Fade>
        </div>
    );
};

export default Now;