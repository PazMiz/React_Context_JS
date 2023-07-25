import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://pazpazm.000webhostapp.com/index.php')
      .then((response) => {
        console.log('Axios Response:', response);
        console.log('Axios Response Data:', response.data);

        // Ensure that response.data is an array before setting it in the state
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setError('Invalid data format. Expected an array of products.');
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error('Axios Error:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      {products.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td style={{ color: 'blue' }}>{product.name}</td>
                <td style={{ color: 'green' }}>{product.price}</td>
                <td style={{ color: 'red' }}>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductList;
