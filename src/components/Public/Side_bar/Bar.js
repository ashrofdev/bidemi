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
                    <input onChange={(e)=>filter(e.target.value)} value="Samsung" name="brand" type="radio"/>
                    Samsung
                </label>
                <label>
                    <input onChange={(e)=>filter(e.target.value)} value="Hp" name="brand" type="radio"/>
                    Hp
                </label>
                <label>
                    <input onChange={(e)=>filter(e.target.value)} value="Apple" name="brand" type="radio"/>
                    Apple
                </label>
                <label>
                    <input onChange={(e)=>filter(e.target.value)} value="Huawei" name="brand" type="radio"/>
                    Huawei
                </label>
                
            </div>
        </div>
    );
};

export default Bar;