import React, { Component } from 'react';
import './app.css'

import { firebaseDB, storage } from './Server';
import { scroller } from 'react-scroll'

import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Bar from './components/Side_bar/Bar';
import Now from './components/Buy_now/Now';

class App extends Component {
  state = {
      products: [
        {
          name: 'Hourse Power (Hp)',
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
        }, {
          name: 'Samaung lite',
          img: 'img/samsung.jpg',
          ram: '16GB of RAM',
          memory: '700GB SSD of space',
          core: 'Intel core i6',
          width: '12-inch retina display',
          price: 'N700,000',
          brand: 'Samsung'
        }, {
          name: 'Huawei',
          img: 'img/3.jpg',
          ram: '16GB of RAM',
          memory: '1TB SSD of space',
          core: 'Intel core i6',
          width: '15-inch retina display',
          price: 'N950,000',
          brand: 'Huawei'
        },  {
          name: 'Hourse Power (Hp)',
          img: 'img/1.jpg',
          ram: '13GB of RAM',
          memory: '900GB SSD of space',
          core: 'Intel core i5',
          width: '15-inch retina display',
          price: 'N450,000',
          brand: 'Hp'
        }, {
          name: 'Apple macbook pro',
          img: 'img/mac.jpg',
          ram: '16GB of RAM',
          memory: '1TB SSD of space',
          core: 'Intel core i7',
          width: '15-inch retina display',
          price: 'N1,300,000',
          brand: 'Apple'
        }, {
          name: 'Samaung lite',
          img: 'img/samsung.jpg',
          ram: '16GB of RAM',
          memory: '700GB SSD of space',
          core: 'Intel core i6',
          width: '12-inch retina display',
          price: 'N700,000',
          brand: 'Samsung'
        }
      ],
      route: 'home',
      product: {},
      search: '',
      filteredPrducts: []
  }
  componentDidMount(){
    this.setState({filteredPrducts: this.state.products})

  }
  authenticate = () => {
    console.log('222')
    const pass = prompt('ENTER PASSWORD')
    if (pass === this.state.password) {
        document.querySelector('.jobs').classList.add('show')
        scroller.scrollTo('jobs', {
            duration: 1000,
            delay: 0,
            smooth: true
        })
    } else {
      alert('wrong password')
    }
  }

  renderProduct = (product) => {
    this.setState(
      {
        product
      })
      this.onRouteChange('details')
  }
  onRouteChange = (route) => {
    this.setState({route})
  }

  onSearch = (value) => {
    this.setState({search: value})
  }
  filter = (val) =>{
    if (val !== 'all') {
      console.log(val)
      const items = this.state.products.filter(e=>{
        return e.brand.toLowerCase().includes(val.toLowerCase())
      })
      this.setState({filteredPrducts: items})
    } else {
      this.setState({filteredPrducts: this.state.products})
    }
  }
  
  render() {

    const filteredPrducts = this.state.filteredPrducts.filter(item=>{
      return item.name.toLowerCase().includes(this.state.search)
    })
    console.log(filteredPrducts)

    
    return (
      <div className="App">
        <div className="side_bar">
          <Bar filter={this.filter}/>
        </div>
        <div className="content">
          <Header onSearch={this.onSearch}/>
          {
            this.state.route === 'details'?
             <ProductDetails onRouteChange={this.onRouteChange} product={this.state.product} back={this.back}/>
             : this.state.route === 'home'?
              <Products onRouteChange={this.onRouteChange} products={filteredPrducts} renderProduct={this.renderProduct}/>
              : this.state.route === 'buyNow'?
              <Now onRouteChange={this.onRouteChange}/>: null
          }
          
          <Contact />
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
