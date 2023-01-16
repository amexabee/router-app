import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
  const { id } = useParams();
  const handleSave = () => {};
  return (
    <div>
      <h1>Product Details - {id}</h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProductsDetails;
