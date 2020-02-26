import React from 'react';
import Slider from 'react-slick'
import './head.css'

const Header = ({onSearch}) => {
    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 700,
    }
    return (
        <div className="header">
            <div className="container">
                <div className="pcl">
                    <h1>PCL</h1>
                    <p>Philip Computer Limited</p>
                </div>
                <Slider className="slider" {...settings}>
                    <div className="slide">
                    <img src={require('../img/1.jpg')}/>
                    </div>
                    <div className="slide">
                    <img src={require('../img/2.png')}/>
                    </div>
                    <div className="slide">
                    <img src={require('../img/3.jpg')}/>
                    </div>
                </Slider>
                <div className="bottom_row">
                    {/* <nav>
                        naviga

                    </nav> */}
                    <input onChange={(e)=>onSearch(e.target.value)} placeholder="🔎 Search..." className="search_box"/>
                </div>
            </div>
        </div>
    );
};

export default Header;