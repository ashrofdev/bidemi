import React from 'react';
import './products.css'

import Product from '../Product/Product'

const Products = ({products, renderProduct}) => {
    const product = products.map(product=>{
        return <Product renderProduct={renderProduct} product={product}/>
    })
    return (
        <div className="products">
            <div className="content">
                {product}
            </div>
        </div>
    );
};

export default Products;