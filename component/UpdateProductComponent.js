import React, { useState } from "react";
import ProductService from "../services/product.services";

const UpdateProduct = ({ productId }) => {
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
      const result = await ProductService.updateProductById(
        productId,
        productObj
      );
      setMessage(result.message);
    } catch (error) {
      console.error("Error updating product:", error);
      setMessage("Failed to update product");
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Unit Price:</label>
          <input
            type="number"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Is Discount Applied:</label>
          <input
            type="checkbox"
            checked={isDiscountApplied}
            onChange={(e) => setIsDiscountApplied(e.target.checked)}
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateProduct;
