import React from 'react';
import './order.css'
import Slide from 'react-reveal/Slide'

const Orders = ({orders, back}) => {
    const order = orders.map((item, i) => {
        console.log(item)
        return (
            <div className="order">
                <p>{i+1} >>  Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Date: {item.name} 2001</p>
            </div>
        )
    })
    return (
        <Slide right>
            <div className="orders">
                {order}
                <button onClick={()=>back('admin')} className="a_back">BACK</button>
            </div>
        </Slide>
    );
};

export default Orders;