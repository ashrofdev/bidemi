import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Sell from './Sell/Sell';
import {firebaseDB, storage} from '../../Server'
import Orders from './Orders/Orders';
import './admin.css'

class Admin extends Component {
    state = {
        file: '',
        imgID: '',
        orderedProducts: [
            {
                name: 'Horse Power (Hp)',
                img: 'img/1.jpg',
                ram: '13GB of RAM',
                memory: '900GB SSD of space',
                core: 'Intel core i5',
                width: '15-inch retina display',
                price: 'N450,000',
                brand: 'Hp'
              },{
                name: 'Huawei',
                img: 'img/3.jpg',
                ram: '16GB of RAM',
                memory: '1TB SSD of space',
                core: 'Intel core i6',
                width: '15-inch retina display',
                price: 'N950,000',
                brand: 'Huawei'
              },{
                name: 'Apple macbook pro',
                img: 'img/mac.jpg',
                ram: '16GB of RAM',
                memory: '1TB SSD of space',
                core: 'Intel core i7',
                width: '15-inch retina display',
                price: 'N1,300,000',
                brand: 'Apple'
              }
        ]
    }
    deployProduct = async () =>{

        await storage.ref().child(`${this.state.imgID}`).put(this.state.file)
        .then((e)=>{
            storage.ref().child(`${this.state.imgID}`).getDownloadURL().then(url => {
                firebaseDB.ref('products').push().set({
                    img: url,
                    name: document.querySelector('.sell_name').value,
                    ram: document.querySelector('.sell_ram').value,
                    memory: document.querySelector('.sell_memory').value,
                    core: document.querySelector('.sell_core').value,
                    width: document.querySelector('.sell_width').value,
                    price: document.querySelector('.sell_price').value,
                    brand: document.querySelector('.sell_brand').value,
                })
            })
        })
        
        console.log(this.state.file)
    }

    uploadImg = (file)=>{
        this.setState({
            file,
            imgID: new Date().getMilliseconds()
        })
    }

    render() {

        

        return (
            <Fade>
                <div className="admin">
                    ADMIN PAGE
                    <Sell upload={this.uploadImg} sell={this.deployProduct}/>
                    <Orders orders={this.state.orderedProducts}/>
                </div>
            </Fade>
        );
    }
}

export default Admin;