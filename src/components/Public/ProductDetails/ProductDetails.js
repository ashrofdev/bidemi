import React from 'react';
import './details.css'
import Slide from 'react-reveal/Fade'

const ProductDetails = ({product, back, onRouteChange}) => {
    console.log(product)
    return (
        <div className="product_details">
            <Slide right>
                <div className="content">
                    <div className="top">
                        <figure>
                            <img src={require(`../${product.img}`)}/>
                        </figure>
                        <div className="details">
                            <p>🌫 {product.ram}</p>
                            <p>🗄 {product.memory}</p>
                            <p>🧮 {product.core}</p>
                            <p>🖥 {product.width}</p>
                            <p>⚙️ {product.brand}</p>
                            <p className="price_tag">🏷 {product.price}</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <h3>{product.name}</h3>
                        <div>
                        <button onClick={()=>onRouteChange('home')} className="back">BACK</button>
                        <button onClick={()=>onRouteChange('buyNow')}>BUY NOW</button>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default ProductDetails;