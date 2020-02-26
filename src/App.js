import React, { Component } from 'react';
import './app.css'

import { firebaseDB, storage } from './Server';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Bar from './components/Side_bar/Bar';
import Now from './components/Buy_now/Now';
import PopUp from './components/popUp/PopUp'



class App extends Component {
  state = {
      products: [  
        
      ],
      route: 'home',
      product: {},
      search: '',
      filteredPrducts: [
        {
          name: 'test'
        }
      ],
      userData: '',
      popUp: false
  }



  componentDidMount(){
    const products = []
    firebaseDB.ref('products').once('value').then((snapshot)=>{
        snapshot.forEach(item => {
            products.push(item.val())
        });
        console.log(products, '.........')
        this.setState(
          {
            filteredPrducts: products,
            products
          })
    })
    console.log(this.state.products)

  }
  // authenticate = () => {
  //   console.log('222')
  //   const pass = prompt('ENTER PASSWORD')
  //   if (pass === this.state.password) {
  //       document.querySelector('.jobs').classList.add('show')
  //       scroller.scrollTo('jobs', {
  //           duration: 1000,
  //           delay: 0,
  //           smooth: true
  //       })
  //   } else {
  //     alert('wrong password')
  //   }
  // }

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
        return e.category.toLowerCase().includes(val.toLowerCase())
      })
      this.setState({filteredPrducts: items})
    } else {
      this.setState({filteredPrducts: this.state.products})
    }
  }

  saveData = (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e)
    const date = new Date()
      this.setState(
        {
          userData: {
            lastname: document.querySelector('.lastname').value,
            firstname: document.querySelector('.firstname').value,
            email: document.querySelector('.mail').value,
            phone: document.querySelector('.phone').value,
            address: document.querySelector('.address').value,
            date: `${date.getDay()}-${date.getMonth()+1}-${date.getFullYear()}`
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
      return item.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    console.log(filteredPrducts)

    
    return (
      <div className="App">
          <div className="side_bar">
            <Bar toAdmin={this.onMainRouteChange} filter={this.filter}/>
          </div>
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
          </div>
      </div>
    );
  }
}
 
export default App;

