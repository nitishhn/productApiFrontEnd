import axios from "axios";

const baseUrl = "http://localhost:3002/product/";

const productObj = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
};

async function getAllProducts() {
  try {
    const response = await axios.get(baseUrl + "getAllProducts");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

async function getProductById(productId) {
  try {
    const response = await axios.get(baseUrl + `getProductById/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
}

async function createNewProduct(productObj) {
  try {
    const response = await axios.post(baseUrl + "createNewProduct", productObj);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
}

async function updateProductById(productId, productObj) {
  try {
    const response = await axios.put(
      baseUrl + `updateProductById/${productId}`,
      productObj
    );
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}

async function deleteProductById(productId) {
  try {
    const response = await axios.delete(
      baseUrl + `deleteProductById/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}

export default productObj;
