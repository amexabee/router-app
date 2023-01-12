import React, { Component } from 'react';
import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductsDetails from './components/productsDetails';
import NotFound from './components/notFound';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <div className="content"></div>
    </div>
  );
}

export default App;
