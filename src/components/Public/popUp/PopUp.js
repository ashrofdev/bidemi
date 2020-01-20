import React from 'react';
import './popup.css'
import Zoom from 'react-reveal/Zoom'

const popUp = ({userData, edit, purchaseProduct}) => {
    return (
        <Zoom>
            <div className="popup">
                <h2>COMFIRM YOUR DETAILS BEFORE SUBMITING</h2>
                <div>
                    <h3>Name</h3>
                    <p>{`${userData.lastname} ${userData.firstname}`}</p>
                </div>
                <div>
                    <h3>Email</h3>
                    <p>{userData.email}</p>
                </div>
                <div>
                    <h3>Phone no</h3>
                    <p>{userData.phone}</p>
                </div>
                <div>
                    <h3>Delivery Address</h3>
                    <p>{userData.address}</p>
                </div>
                <div className="btns">
                    <button onClick={edit}>EDIT</button>
                    <button onClick={purchaseProduct} style={{backgroundColor: 'black', color: 'white'}}>PROCEED</button>
                </div>
            </div>
        </Zoom>
        
    );
};

export default popUp;