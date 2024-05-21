/*   import React, { useState, useEffect } from "react";
import ProductService from "../services/product.services";

const GetProductById = () => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setProductId(event.target.value);
  };

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const productData = await ProductService.getProductById(productId);
      setProduct(productData);
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return (
    <div>
      <h2>Get Product By ID</h2>
      <input
        type="text"
        value={productId}
        onChange={handleInputChange}
        placeholder="Enter Product ID"
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        product && (
          <div>
            <h2>Product Details</h2>
            <p>ID: {product.ProductID}</p>
            <p>Name: {product.ProductName}</p>
            <p>Description: {product.Description}</p>
            <p>Price: ${product.UnitPrice}</p>
            <p>Quantity: {product.Quantity}</p>
          </div>
        )
      )}
    </div>
  );
};

export default GetProductById;

*/

import React, { useState, useEffect } from "react";
import ProductService from "../services/product.services";

const GetProductById = () => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setProductId(event.target.value);
  };

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const productData = await ProductService.getProductById(productId);
      setProduct(productData);
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetProductClick = () => {
    if (productId) {
      fetchProduct();
    }
  };

  return (
    <div>
      <h2>Get Product By ID</h2>
      <input
        type="text"
        value={productId}
        onChange={handleInputChange}
        placeholder="Enter Product ID"
      />
      <button onClick={handleGetProductClick}>Get Product By ID</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        product && (
          <div>
            <h2>Product Details</h2>
            <p>ID: {product.ProductID}</p>
            <p>Name: {product.ProductName}</p>
            <p>Description: {product.Description}</p>
            <p>Price: ${product.UnitPrice}</p>
            <p>Quantity: {product.Quantity}</p>
          </div>
        )
      )}
    </div>
  );
};

export default GetProductById;
