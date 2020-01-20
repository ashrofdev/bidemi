import React, { Component } from 'react';
import './app.css'

import { firebaseDB, storage } from './Server';
import { scroller } from 'react-scroll'

import Header from './components/Public/Header/Header';
import Footer from './components/Public/Footer/Footer';
import Products from './components/Public/Products/Products';
import ProductDetails from './components/Public/ProductDetails/ProductDetails';
import Bar from './components/Public/Side_bar/Bar';
import Now from './components/Public/Buy_now/Now';
import PopUp from './components/Public/popUp/PopUp'
import Admin from './components/Admin/Admin'





class App extends Component {
  state = {
      products: [
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
      mainRoute: 'home',
      route: 'home',
      product: {},
      search: '',
      filteredPrducts: [],
      userData: '',
      popUp: false
  }
  componentDidMount(){
    this.setState({filteredPrducts: this.state.products})
    firebaseDB.ref().once('value').then((snaphot)=>{
      console.log(snaphot.val())
    })

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
  onMainRouteChange = (route) => {
    this.setState({mainRoute: route})
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

  saveData = () => {
    this.setState(
      {
        userData: {
          lastname: document.querySelector('.lastname').value,
          firstname: document.querySelector('.firstname').value,
          email: document.querySelector('.mail').value,
          phone: document.querySelector('.phone').value,
          address: document.querySelector('.address').value
      },
        popUp: true
      })
    console.log(this.state.userData)
  }

  editUserData = () => {
    this.setState({popUp: false})
  }
  onProceedPurchase = async () => {
    
    alert('Sending')
    await firebaseDB.ref('purchases').push().set({
      userData: this.state.userData,
      product: this.state.product
    })
    alert('sent')
    console.log({
      userData: this.state.userData,
      productDetails: this.state.product
    })
  }
  
  render() {

    const filteredPrducts = this.state.filteredPrducts.filter(item=>{
      return item.name.toLowerCase().includes(this.state.search)
    })
    console.log(filteredPrducts)

    
    return (
      <div className="App">
        {
          this.state.mainRoute !== 'admin'?
          <div className="side_bar">
            <Bar toAdmin={this.onMainRouteChange} filter={this.filter}/>
          </div>:null
        }
        {
          this.state.mainRoute === 'home'?
          <div className="content">
            <Header onSearch={this.onSearch}/>
            {
              this.state.route === 'details'?
              <ProductDetails onRouteChange={this.onRouteChange} product={this.state.product} back={this.back}/>
              : this.state.route === 'home'?
                <Products onRouteChange={this.onRouteChange} products={filteredPrducts} renderProduct={this.renderProduct}/>
                : this.state.route === 'buyNow'?
                <Now popUp={this.state.popUp} saveData={this.saveData} onRouteChange={this.onRouteChange}/>: null

            }
              { this.state.popUp ?
                <PopUp purchaseProduct={this.onProceedPurchase} userData={this.state.userData} edit={this.editUserData}/>: null}
            
            
            <Footer/>
          </div>:
          this.state.mainRoute === 'admin'?
            <Admin/>: null
        }
      </div>
    );
  }
}

export default App;
