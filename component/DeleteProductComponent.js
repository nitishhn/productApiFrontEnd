import React, { useState } from "react";
import ProductService from "../services/product.services";

const DeleteProduct = ({ productId }) => {
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    try {
      const result = await ProductService.deleteProductById(productId);
      setMessage(result.message);
    } catch (error) {
      console.error("Error deleting product:", error);
      setMessage("Failed to delete product");
    }
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <button onClick={handleDelete}>Delete Product</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteProduct;
