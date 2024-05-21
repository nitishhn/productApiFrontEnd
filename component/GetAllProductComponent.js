/*  import React, { useState, useEffect } from "react";
import ProductService from "../services/product.services";

const GetAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await ProductService.getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Unit Price</th>
            <th>Quantity</th>

          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.ProductID}</td>
              <td>{product.ProductName}</td>
              <td>{product.Description}</td>
              <td>{product.UnitPrice}</td>
              <td>{product.Quantity}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllProducts;

*/

import React, { useState, useEffect } from "react";
import ProductService from "../services/product.services";

import "./GetAllProductComponent.css";

import { useNavigate } from "react-router-dom";

const GetAllProducts = () => {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/HomePage");
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await ProductService.getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h2>All Products</h2>
      <div className="card-container">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h5 className="card-title">{product.ProductName}</h5>
              <p className="card-text">
                <strong>Product ID:</strong> {product.ProductID}
              </p>
              <p className="card-text">
                <strong>Description:</strong> {product.Description || "N/A"}
              </p>
              <p className="card-text">
                <strong>Unit Price:</strong> ${product.UnitPrice}
              </p>
              <p className="card-text">
                <strong>Quantity:</strong> {product.Quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={buttonClick}>Back</button>
    </div>
  );
};

export default GetAllProducts;
