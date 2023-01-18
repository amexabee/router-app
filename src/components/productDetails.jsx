import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const ProductsDetails = () => {
  const { id } = useParams();
  const [navigate, setNavigate] = useState(false);
  if (navigate) return <Navigate to="/products" replace={true} />;

  return (
    <div>
      <h1>Product Details - {id}</h1>
      <button onClick={() => setNavigate(true)}>Save</button>
    </div>
  );
};

export default ProductsDetails;
