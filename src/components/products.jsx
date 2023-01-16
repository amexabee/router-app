import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

/* Optional: using sfc
const Products = () => {
  const [state, setState] = useState({
    products: [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
    ],
  });
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {state.products.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}; */

class Products extends Component {
  state = {
    products: [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
    ],
  };
  render() {
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {this.state.products.map((product) => (
            <li key={product.id}>
              <Link to={`${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
        {/* <Outlet /> */}
      </div>
    );
  }
}

export default Products;
