import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './state/';
import Containers from './components/mini_containers';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/pages/home/index.js';
import ShopCatalog from './components/pages/shop/catalog';
import ShopDetail from './components/pages/shop/detail';
import AppShell from './components/fixed/index.js';
import Newsletter from './components/pages/newsletter/index.js';
import OurUniverse from './components/pages/our-universe/index.js';
import OptionPanel from './components/pages/store';
import Terms from './components/pages/terminos&condiciones';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={store}>
              <Router>
                <AppShell>
                  <Route exact path="/" component={Home}/>
                  <Route path="/shop-catalog" component={ShopCatalog}/>
                  <Route path="/shop-detail/:id" component={ShopDetail}/>
                  <Route path="/news-letter" component={Newsletter}/>
                  <Route path="/our-universe" component={OurUniverse}/>
                  <Route path="/option-panel" component={OptionPanel}/>
                  <Route path="terminos" component={Terms}/>
                </AppShell>
              </Router>
          </Provider>
      </div>
    );
  }
}

export default App;
