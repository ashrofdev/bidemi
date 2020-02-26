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
                    <form>
                        <div className="form">
                            <input required className="lastname" placeholder="Lastname"/>
                            <input required className="firstname" placeholder="Firstname"/>
                            <input required className="mail" type="email" placeholder="Email"/>
                            <input required className="phone" type="number" placeholder="Phone no"/>
                            <input required className="address" placeholder="Delivery address"/>
                        </div>
                        <div className="cta">
                            <button onClick={()=>onRouteChange('details')} className="back">CANCEL</button>
                            <button type="submit" onSubmit={(e)=>e.preventDefault()}>CONFIRM</button>
                        </div>
                    </form>
                </div>
            
            </Fade>
        </div>
    );
};

export default Now;