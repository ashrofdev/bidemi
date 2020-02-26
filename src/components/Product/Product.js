import React from 'react';
import './product.css'

import Slide from 'react-reveal/Fade'


/////////////////// you should implement the search functionality first

const Product = ({product, renderProduct}) => {
    return (
        <Slide left>
            <div className="product">
                <img src={product.img}/>
                <h4 className="product_name">{product.name}</h4>
                <p className="width">🖥 {product.width}</p>
                <p className="intel">🧮 {product.core}</p>
                <div className="product_cta">
                    <p className="product_price">{product.price}</p>
                    <button onClick={()=>renderProduct(product)}>BUY</button>
                </div>

            </div>
        </Slide>
    );
};

export default Product;