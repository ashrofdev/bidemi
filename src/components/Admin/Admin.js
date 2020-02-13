import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Sell from './Sell/Sell';
import {firebaseDB, storage} from '../../Server'
import Orders from './Orders/Orders';
import './admin.css'

class Admin extends Component {
    state = {
        route: 'sell',
        file: '',
        imgID: '',
        orderedProducts: [  ]
    }
    componentDidMount(){
        const orders = []
        firebaseDB.ref('purchases').once('value').then((snapshot)=>{
            snapshot.forEach(item => {
                orders.push(item.val())
            });
            console.log(orders, '.........')
        })
        this.setState({orderedProducts: orders})
        console.log(this.state.orderedProducts, 'ooorororororor')
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
                    price: '₦'+document.querySelector('.sell_price').value,
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
    onRouteChange = (route) => {
        this.setState({route})
    }

    render() {

        

        return (
            <div className="admin">
                {
                    this.state.route === 'admin'?
                    <Fade top>
                        <div className="cta">
                            <button onClick={()=>this.onRouteChange('sell')}>SELL</button>
                            <button onClick={()=>this.onRouteChange('orders')}>ORDERS</button>
                        </div>
                    </Fade>
                    :this.state.route === 'sell'?
                    <Sell back={this.onRouteChange} upload={this.uploadImg} sell={this.deployProduct}/>
                    :this.state.route === 'orders'?
                    <Orders back={this.onRouteChange} orders={this.state.orderedProducts}/>:null
                }
            </div>
        );
    }
}

export default Admin;