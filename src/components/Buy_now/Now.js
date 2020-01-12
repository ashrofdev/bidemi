import React from 'react';
import './now.css'

const Now = () => {
    return (
        <div className="buy_now">
            <div className="content">
                <h3>Fill the form below</h3>
                <p>All filds are required</p>
                <div className="form">
                    <input placeholder="Lastname"/>
                    <input placeholder="Firstname"/>
                    <input placeholder="Email"/>
                    <input placeholder="Phone no"/>
                    <input placeholder="Delivery address"/>
                </div>
            </div>
        </div>
    );
};

export default Now;