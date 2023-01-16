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
import Users from './components/admin/users';
import AdminPosts from './components/admin/posts';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="products/:id" element={<ProductDetails />} />
      <Route path="products" element={<Products sortBy="newest" />} />
      <Route path="posts/:year?/:month?" element={<Posts />} />
      <Route path="admin" element={<Dashboard />}>
        <Route path="users" element={<Users />} />
        <Route path="posts" element={<AdminPosts />} />
      </Route>
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
