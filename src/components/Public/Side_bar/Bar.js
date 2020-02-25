import React from 'react';
import './bar.css'

const Bar = ({filter, toAdmin}) => {
    
    return (
        <div>
            <h2 onClick={()=>toAdmin('admin')} className="heading">PCL</h2>
            <div className="list">
                <h3>BRAND</h3>
                <label>
                    <input onChange={(e)=>filter(e.target.value)} value="all" defaultChecked name="brand" type="radio"/>
                    All
                </label>
                <label>
                    <input onChange={(e)=>filter(e.target.value)} value="laptops" name="brand" type="radio"/>
                    Laptops
                </label>
                <label>
                    <input onChange={(e)=>filter(e.target.value)} value="phones" name="brand" type="radio"/>
                    Phones
                </label>
                <label>
                    <input onChange={(e)=>filter(e.target.value)} value="accessory" name="brand" type="radio"/>
                    Accessory
                </label>
                
            </div>
        </div>
    );
};

export default Bar;