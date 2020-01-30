import React from 'react';
import './sell.css'

const Sell = ({sell, upload}) => {
    return (
        <div className="sell">
            <input onChange={(e)=>upload(e.target.files[0])} type="file"/>
            <input className="sell_name" placeholder="Product name"/>
            <input className="sell_memory" placeholder="SSD memory size"/>
            <input className="sell_ram" placeholder="RAM size"/>
            <input className="sell_core" placeholder="core"/>
            <input className="sell_width" placeholder="screen size"/>
            <input className="sell_brand" placeholder="manufacturer"/>
            <input className="sell_price" placeholder="Prduct price"/>
            <button onClick={sell}>SELL</button>
        </div>
    );
};

export default Sell;