(this.webpackJsonpbidemi=this.webpackJsonpbidemi||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(54),l=a.n(c);a(41);t.default=function(e){var t=e.onSearch;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"pcl"},r.a.createElement("h1",null,"PCL"),r.a.createElement("p",null,"Philip Computer Limited")),r.a.createElement(l.a,Object.assign({className:"slider"},{dots:!1,infinite:!0,autoplay:!0,speed:700}),r.a.createElement("div",{className:"slide"},r.a.createElement("img",{src:a(42)})),r.a.createElement("div",{className:"slide"},r.a.createElement("img",{src:a(43)})),r.a.createElement("div",{className:"slide"},r.a.createElement("img",{src:a(44)}))),r.a.createElement("div",{className:"bottom_row"},r.a.createElement("input",{onChange:function(e){return t(e.target.value)},placeholder:"\ud83d\udd0e Search...",className:"search_box"}))))}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);a(45);t.default=function(){return r.a.createElement("div",{className:"section footer"},r.a.createElement("div",{className:"section_content"},r.a.createElement("p",{className:"footer_text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),r.a.createElement("p",{className:"copy"},"\xa9 All rights reserved by ashrofdev")))}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=(a(46),a(17));t.default=function(e){var t=e.products,a=e.renderProduct;console.log(t);var n=t.map((function(e){return r.a.createElement(c.default,{renderProduct:a,product:e})}));return r.a.createElement("div",{className:"products"},r.a.createElement("div",{className:"content"},n))}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=(a(47),a(3)),l=a.n(c);t.default=function(e){var t=e.product,n=e.renderProduct;return r.a.createElement(l.a,{left:!0},r.a.createElement("div",{className:"product"},r.a.createElement("img",{src:a(48)("./".concat(t.img))}),r.a.createElement("h4",{className:"product_name"},t.name),r.a.createElement("p",{className:"width"},"\ud83d\udda5 ",t.width),r.a.createElement("p",{className:"intel"},"\ud83e\uddee ",t.core),r.a.createElement("div",{className:"product_cta"},r.a.createElement("p",{className:"product_price"},t.price),r.a.createElement("button",{onClick:function(){return n(t)}},"BUY"))))}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=(a(49),a(3)),l=a.n(c);t.default=function(e){var t=e.onRouteChange,a=e.saveData;e.popUp;return r.a.createElement("div",{className:"buy_now"},r.a.createElement(l.a,{bottom:!0},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,"Fill the form below"),r.a.createElement("p",null,"All fields are required"),r.a.createElement("div",{className:"form"},r.a.createElement("input",{className:"lastname",placeholder:"Lastname"}),r.a.createElement("input",{className:"firstname",placeholder:"Firstname"}),r.a.createElement("input",{className:"mail",type:"email",placeholder:"Email"}),r.a.createElement("input",{className:"phone",type:"number",placeholder:"Phone no"}),r.a.createElement("input",{className:"address",placeholder:"Delivery address"})),r.a.createElement("div",{className:"cta"},r.a.createElement("button",{onClick:function(){return t("details")},className:"back"},"CANCEL"),r.a.createElement("button",{onClick:a},"CONFIRM")))))}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=(a(50),a(3)),l=a.n(c);t.default=function(e){var t=e.product,n=(e.back,e.onRouteChange);return console.log(t),r.a.createElement("div",{className:"product_details"},r.a.createElement(l.a,{right:!0},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"top"},r.a.createElement("figure",null,r.a.createElement("img",{src:a(48)("./".concat(t.img))})),r.a.createElement("div",{className:"details"},r.a.createElement("p",null,"\ud83c\udf2b ",t.ram),r.a.createElement("p",null,"\ud83d\uddc4 ",t.memory),r.a.createElement("p",null,"\ud83e\uddee ",t.core),r.a.createElement("p",null,"\ud83d\udda5 ",t.width),r.a.createElement("p",null,"\u2699\ufe0f ",t.brand),r.a.createElement("p",{className:"price_tag"},"\ud83c\udff7 ",t.price))),r.a.createElement("div",{className:"bottom"},r.a.createElement("h3",null,t.name),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return n("home")},className:"back"},"BACK"),r.a.createElement("button",{onClick:function(){return n("buyNow")}},"BUY NOW"))))))}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);a(51);t.default=function(e){var t=e.filter,a=e.toAdmin;return r.a.createElement("div",null,r.a.createElement("h2",{onClick:function(){return a("admin")},className:"heading"},"PCL"),r.a.createElement("div",{className:"list"},r.a.createElement("h3",null,"BRAND"),r.a.createElement("label",null,r.a.createElement("input",{onChange:function(e){return t(e.target.value)},value:"all",defaultChecked:!0,name:"brand",type:"radio"}),"All"),r.a.createElement("label",null,r.a.createElement("input",{onChange:function(e){return t(e.target.value)},value:"Samsung",name:"brand",type:"radio"}),"Samsung"),r.a.createElement("label",null,r.a.createElement("input",{onChange:function(e){return t(e.target.value)},value:"Hp",name:"brand",type:"radio"}),"Hp"),r.a.createElement("label",null,r.a.createElement("input",{onChange:function(e){return t(e.target.value)},value:"Apple",name:"brand",type:"radio"}),"Apple"),r.a.createElement("label",null,r.a.createElement("input",{onChange:function(e){return t(e.target.value)},value:"Huawei",name:"brand",type:"radio"}),"Huawei")))}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=(a(52),a(55)),l=a.n(c);t.default=function(e){var t=e.userData,a=e.edit,n=e.purchaseProduct;return r.a.createElement(l.a,null,r.a.createElement("div",{className:"popup"},r.a.createElement("h2",null,"COMFIRM YOUR DETAILS BEFORE SUBMITING"),r.a.createElement("div",null,r.a.createElement("h3",null,"Name"),r.a.createElement("p",null,"".concat(t.lastname," ").concat(t.firstname))),r.a.createElement("div",null,r.a.createElement("h3",null,"Email"),r.a.createElement("p",null,t.email)),r.a.createElement("div",null,r.a.createElement("h3",null,"Phone no"),r.a.createElement("p",null,t.phone)),r.a.createElement("div",null,r.a.createElement("h3",null,"Delivery Address"),r.a.createElement("p",null,t.address)),r.a.createElement("div",{className:"btns"},r.a.createElement("button",{onClick:a},"EDIT"),r.a.createElement("button",{onClick:n,style:{backgroundColor:"black",color:"white"}},"PROCEED"))))}},,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/1.200356c3.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.17212d27.png"},function(e,t,a){e.exports=a.p+"static/media/3.b85d07ca.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./Buy_now/Now":18,"./Buy_now/Now.js":18,"./Buy_now/now.css":49,"./Footer/Footer":15,"./Footer/Footer.js":15,"./Footer/footer.css":45,"./Header/Header":14,"./Header/Header.js":14,"./Header/head.css":41,"./Product/Product":17,"./Product/Product.js":17,"./Product/product.css":47,"./ProductDetails/ProductDetails":19,"./ProductDetails/ProductDetails.js":19,"./ProductDetails/details.css":50,"./Products/Products":16,"./Products/Products.js":16,"./Products/products.css":46,"./Side_bar/Bar":20,"./Side_bar/Bar.js":20,"./Side_bar/bar.css":51,"./img/1.jpg":42,"./img/2.png":43,"./img/3.jpg":44,"./img/mac.jpg":91,"./img/samsung.jpg":92,"./popUp/PopUp":21,"./popUp/PopUp.js":21,"./popUp/popup.css":52};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=48},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){e.exports=a(96)},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/mac.efd6830c.jpg"},function(e,t,a){e.exports=a.p+"static/media/samsung.4c3bb815.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=a(6),s=a.n(o),u=a(22),i=a(23),m=a(24),d=a(27),p=a(25),h=a(28),E=(a(62),a(7)),f=a.n(E);a(63),a(97);f.a.initializeApp({apiKey:"AIzaSyBuF8hPZLR2wH9o_3DmsuLBpCfCSPxyEOE",authDomain:"pclimited-b5ee3.firebaseapp.com",databaseURL:"https://pclimited-b5ee3.firebaseio.com",projectId:"pclimited-b5ee3",storageBucket:"pclimited-b5ee3.appspot.com",messagingSenderId:"75498064754",appId:"1:75498064754:web:0d562278e0e068e506ebeb",measurementId:"G-SQFZR8X3SF"});var v=f.a.database(),g=f.a.storage(),b=a(53),N=a(14),y=a(15),C=a(16),P=a(19),D=a(20),S=a(18),w=a(21),k=a(3),R=a.n(k),_=(a(93),a(26)),j=a.n(_),O=function(e){var t=e.sell,a=e.upload,n=e.back;return r.a.createElement(j.a,{left:!0},r.a.createElement("div",{className:"sell"},r.a.createElement("input",{onChange:function(e){return a(e.target.files[0])},type:"file"}),r.a.createElement("div",{className:"fields"},r.a.createElement("input",{className:"sell_name",placeholder:"Product name"}),r.a.createElement("input",{className:"sell_memory",placeholder:"SSD memory size"}),r.a.createElement("input",{className:"sell_ram",placeholder:"RAM size"}),r.a.createElement("input",{className:"sell_core",placeholder:"core"}),r.a.createElement("input",{className:"sell_width",placeholder:"screen size"}),r.a.createElement("input",{className:"sell_brand",placeholder:"manufacturer"}),r.a.createElement("input",{type:"number",className:"sell_price",placeholder:"Prduct price"})),r.a.createElement("button",{className:"sell",onClick:t},"SELL"),r.a.createElement("button",{onClick:function(){return n("admin")},className:"a_back"},"BACK")))},U=(a(94),function(e){var t=e.orders,a=e.back,n=t.map((function(e,t){return console.log(e),r.a.createElement("div",{className:"order"},r.a.createElement("img",{src:e.product.img}),r.a.createElement("p",null,"Product Name: ",e.product.name),r.a.createElement("p",null,"Price: ",e.product.price),r.a.createElement("p",null,"Buyer's name: ",e.userData.lastname),r.a.createElement("p",null,"Buyer's address: ",e.userData.address),r.a.createElement("p",null,"Buyer's mail: ",e.userData.email),r.a.createElement("p",null,"Buyer's no: ",e.userData.phone),r.a.createElement("p",null,"Date: ",e.userData.date))}));return r.a.createElement(j.a,{right:!0},r.a.createElement("div",{className:"orders"},n,r.a.createElement("button",{onClick:function(){return a("admin")},className:"a_back"},"BACK")))}),A=(a(95),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={route:"admin",file:"",imgID:"",orderedProducts:[]},a.deployProduct=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.ref().child("".concat(a.state.imgID)).put(a.state.file).then((function(e){g.ref().child("".concat(a.state.imgID)).getDownloadURL().then((function(e){v.ref("products").push().set({img:e,name:document.querySelector(".sell_name").value,ram:document.querySelector(".sell_ram").value,memory:document.querySelector(".sell_memory").value,core:document.querySelector(".sell_core").value,width:document.querySelector(".sell_width").value,price:document.querySelector(".sell_price").value,brand:document.querySelector(".sell_brand").value})}))}));case 2:console.log(a.state.file);case 3:case"end":return e.stop()}}),e)}))),a.uploadImg=function(e){a.setState({file:e,imgID:(new Date).getMilliseconds()})},a.onRouteChange=function(e){a.setState({route:e})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=[];v.ref("purchases").once("value").then((function(t){t.forEach((function(t){e.push(t.val())})),console.log(t.val(),".........")})),this.setState({orderedProducts:e}),console.log(this.state.orderedProducts,"ooorororororor")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"admin"},"admin"===this.state.route?r.a.createElement(R.a,{top:!0},r.a.createElement("div",{className:"cta"},r.a.createElement("button",{onClick:function(){return e.onRouteChange("sell")}},"SELL"),r.a.createElement("button",{onClick:function(){return e.onRouteChange("orders")}},"ORDERS"))):"sell"===this.state.route?r.a.createElement(O,{back:this.onRouteChange,upload:this.uploadImg,sell:this.deployProduct}):"orders"===this.state.route?r.a.createElement(U,{back:this.onRouteChange,orders:this.state.orderedProducts}):null)}}]),t}(n.Component)),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],mainRoute:"home",route:"home",product:{},search:"",filteredPrducts:[],userData:"",popUp:!1},a.authenticate=function(){console.log("222"),prompt("ENTER PASSWORD")===a.state.password?(document.querySelector(".jobs").classList.add("show"),b.scroller.scrollTo("jobs",{duration:1e3,delay:0,smooth:!0})):alert("wrong password")},a.renderProduct=function(e){a.setState({product:e}),a.onRouteChange("details")},a.onRouteChange=function(e){a.setState({route:e})},a.onMainRouteChange=function(e){a.setState({mainRoute:e})},a.onSearch=function(e){a.setState({search:e})},a.filter=function(e){if("all"!==e){console.log(e);var t=a.state.products.filter((function(t){return t.brand.toLowerCase().includes(e.toLowerCase())}));a.setState({filteredPrducts:t})}else a.setState({filteredPrducts:a.state.products})},a.saveData=function(){var e=new Date;a.setState({userData:{lastname:document.querySelector(".lastname").value,firstname:document.querySelector(".firstname").value,email:document.querySelector(".mail").value,phone:document.querySelector(".phone").value,address:document.querySelector(".address").value,date:"".concat(e.getDay(),"-").concat(e.getMonth()+1,"-").concat(e.getFullYear())},popUp:!0}),console.log(a.state.userData)},a.editUserData=function(){a.setState({popUp:!1})},a.onProceedPurchase=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("Sending"),e.next=3,v.ref("purchases").push().set({userData:a.state.userData,product:a.state.product});case 3:alert("sent"),console.log({userData:a.state.userData,productDetails:a.state.product});case 5:case"end":return e.stop()}}),e)}))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];v.ref("products").once("value").then((function(a){console.log(a.val()),a.forEach((function(e){t.push(e.val())})),e.setState({products:t})})),console.log(t),console.log(this.state.products)}},{key:"render",value:function(){var e=this,t=this.state.filteredPrducts.filter((function(t){return t.name.toLowerCase().includes(e.state.search)}));return console.log(t),r.a.createElement("div",{className:"App"},"admin"!==this.state.mainRoute?r.a.createElement("div",{className:"side_bar"},r.a.createElement(D.default,{toAdmin:this.onMainRouteChange,filter:this.filter})):null,"home"===this.state.mainRoute?r.a.createElement("div",{className:"content"},r.a.createElement(N.default,{onSearch:this.onSearch}),"details"===this.state.route?r.a.createElement(P.default,{onRouteChange:this.onRouteChange,product:this.state.product,back:this.back}):"home"===this.state.route?r.a.createElement(C.default,{onRouteChange:this.onRouteChange,products:this.state.products,renderProduct:this.renderProduct}):"buyNow"===this.state.route?r.a.createElement(S.default,{popUp:this.state.popUp,saveData:this.saveData,onRouteChange:this.onRouteChange}):null,this.state.popUp?r.a.createElement(w.default,{purchaseProduct:this.onProceedPurchase,userData:this.state.userData,edit:this.editUserData}):null,r.a.createElement(y.default,null)):"admin"===this.state.mainRoute?r.a.createElement(A,null):null)}}]),t}(n.Component);l.a.render(r.a.createElement(B,null),document.getElementById("root"))}],[[56,1,2]]]);
//# sourceMappingURL=main.436f0f65.chunk.js.map