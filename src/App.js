import React, { Component } from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/posts/:year?/:month?" element={<Posts />} />
            <Route path="/admin/*" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
