import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Store/Store";
import './App.css';
// page
import Home from "./Home/home";
import OnlineProduct from "./OnlineProduct/index";
import Cart from "./Cart/index";
import Food from "./Food/index";
import CartIcon from "./CartIcon/CartIcon"; 

class App extends Component {
 
  render() {
    return (
      <Router>

<div className="container">
<div className="navnvbar">
  <div className="navbar">

  <Link to="/" className="bar">Delivery^_^</Link>

      <div className="links">
        <Link to="/Food" className="barr">Food</Link>
        <Link to="/Cart" className="barr">Cart</Link>
        <Link to="#about" className="barr">About</Link>
        <Link to="#menu" className="barr">Menu</Link>
        <Link to="#contact" className="barr">Contact</Link>

      </div>
      <CartIcon />

    </div>
  </div>
</div>


<Route path="/" component={Home} exact />
<Route path="/Food" component={Food} exact />
<Route path="/Food/:id" component={OnlineProduct} exact />
<Route path="/Cart" component={Cart} exact />

</Router>

    );
  }
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;
