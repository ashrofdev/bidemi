import React from 'react';
import './bar.css'

const Bar = ({filter}) => {
    const test = (val) =>{
        console.log(val)
    }
    return (
        <div>
            <h2 className="heading">PCL</h2>
            <div className="list">
                <h3>BRAND</h3>
                <label>
                    <input onChange={(e)=>test(e.target.value)} value="all" defaultChecked name="brand" type="radio"/>
                    All
                </label>
                <label>
                    <input onChange={(e)=>test(e.target.value)} value="samsung" name="brand" type="radio"/>
                    Samsung
                </label>
                <label>
                    <input onChange={(e)=>test(e.target.value)} value="hp" name="brand" type="radio"/>
                    Hp
                </label>
                <label>
                    <input onChange={(e)=>test(e.target.value)} value="lenovo" name="brand" type="radio"/>
                    Lenovo
                </label>
                <label>
                    <input onChange={(e)=>test(e.target.value)} value="dell" name="brand" type="radio"/>
                    Dell
                </label>
                
            </div>
        </div>
    );
};

export default Bar;