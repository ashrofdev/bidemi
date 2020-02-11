import React from 'react';
import './sell.css'
import Slide from 'react-reveal/Slide'

const Sell = ({sell, upload, back}) => {
    return (
        <Slide left>
             <div className="sell">
                <input onChange={(e)=>upload(e.target.files[0])} type="file"/>
                <div className="fields">
                    <input className="sell_name" placeholder="Product name"/>
                    <input className="sell_memory" placeholder="SSD memory size"/>
                    <input className="sell_ram" placeholder="RAM size"/>
                    <input className="sell_core" placeholder="core"/>
                    <input className="sell_width" placeholder="screen size"/>
                    <input className="sell_brand" placeholder="manufacturer"/>
                    <input type="number" className="sell_price" placeholder="Prduct price"/>
                </div>
                <button className="sell" onClick={sell}>SELL</button>
                <button onClick={()=>back('admin')} className="a_back">BACK</button>
            </div>
        </Slide>
    );
};

export default Sell;