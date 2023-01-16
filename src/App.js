import React, { Component } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="products" element={<Products sortBy="newest" />}>
        <Route path=":id" element={<ProductDetails />} />
      </Route>
      <Route path="posts/:year?/:month?" element={<Posts />} />
      <Route path="admin/*" element={<Dashboard />} />
      <Route index element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
