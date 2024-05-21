import React, { useState } from "react";

import ProductService from "../services/product.services";
import "./CreateProductComponent.css";

import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/HomePage");
  }

  const [productName, setProductName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productObj = {
        ProductName: productName,
        UnitPrice: unitPrice,
        Quantity: quantity,
        Category: category,
        IsDiscountApplied: isDiscountApplied,
      };
      const result = await ProductService.createNewProduct(productObj);
      setMessage(result.message);
    } catch (error) {
      console.error("Error creating product:", error);
      setMessage("Failed to create product");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="label">Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-field">
          <label className="label">Unit Price:</label>
          <input
            type="number"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-field">
          <label className="label">Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-field">
          <label className="label">Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-field checkbox-container">
          <input
            type="checkbox"
            checked={isDiscountApplied}
            onChange={(e) => setIsDiscountApplied(e.target.checked)}
            className="input"
          />
          <label className="checkbox-label">Is Discount Applied</label>
        </div>
        <button type="submit" className="button">
          Create Product
        </button>
      </form>
      {message && <p>{message}</p>}

      <button onClick={buttonClick}>Back</button>
    </div>
  );
};

export default CreateProduct;

/*
    
    import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../services/product.services";
import "./CreateProductComponent.css";

const CreateProduct = () => {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState(""); // New state for description
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productObj = {
        productName,
        unitPrice,
        quantity,
        category,
        description, // Include description in product object
        isDiscountApplied,
      };
      const result = await ProductService.createNewProduct(productObj);
      setMessage(result.message);
    } catch (error) {
      console.error("Error creating product:", error);
      setMessage("Failed to create product");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="label">Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-field">
          <label className="label">Unit Price:</label>
          <input
            type="number"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-field">
          <label className="label">Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-field">
          <label className="label">Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-field">
          <label className="label">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-field checkbox-container">
          <input
            type="checkbox"
            checked={isDiscountApplied}
            onChange={(e) => setIsDiscountApplied(e.target.checked)}
            className="input"
          />
          <label className="checkbox-label">Is Discount Applied</label>
        </div>
        <button type="submit" className="button">
          Create Product
        </button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={() => navigate("/HomePage")}>Back</button>
    </div>
  );
};

export default CreateProduct;

*/
