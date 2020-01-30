import React from 'react';
import './order.css'

const Orders = ({orders}) => {
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
        <div className="orders">
            {order}
        </div>
    );
};

export default Orders;