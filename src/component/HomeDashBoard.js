/*  import React from "react";
import GetAllProducts from "./GetAllProductComponent";
import GetProductById from "./GetProductByIdComponent";
import CreateProduct from "./CreateProductComponent";
import UpdateProduct from "./UpdateProductComponent";
import DeleteProduct from "./DeleteProductComponent";

const HomeDashboard = () => {
  return (
    <div>
      <h1>Product Management Dashboard</h1>
      <div>
        <GetAllProducts />
      </div>
      <div>
        <GetProductById productId={5} />
      </div>
      <div>
        <CreateProduct />
      </div>
      <div>
        <UpdateProduct productId={5} />
      </div>
      <div>
        <DeleteProduct productId={5} />
      </div>
    </div>
  );
};

export default HomeDashboard;

*

import React, { useState } from "react";
import GetAllProducts from "./GetAllProductComponent";
import GetProductById from "./GetProductByIdComponent";
import CreateProduct from "./CreateProductComponent";
import UpdateProduct from "./UpdateProductComponent";
import DeleteProduct from "./DeleteProductComponent";

const HomeDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div>
      <h1>Product Management Dashboard</h1>
      <div>
        <button onClick={() => handleComponentChange("GetAllProducts")}>
          View All Products
        </button>
        <button onClick={() => handleComponentChange("GetProductById")}>
          Get Product By ID
        </button>
        <button onClick={() => handleComponentChange("CreateProduct")}>
          Create New Product
        </button>
        <button onClick={() => handleComponentChange("UpdateProduct")}>
          Update Product
        </button>
        <button onClick={() => handleComponentChange("DeleteProduct")}>
          Delete Product
        </button>
      </div>
      <div>
        {selectedComponent === "GetAllProducts" && <GetAllProducts />}
        {selectedComponent === "GetProductById" && (
          <GetProductById productId={5} />
        )}
        {selectedComponent === "CreateProduct" && <CreateProduct />}
        {selectedComponent === "UpdateProduct" && (
          <UpdateProduct productId={5} />
        )}
        {selectedComponent === "DeleteProduct" && (
          <DeleteProduct productId={5} />
        )}
      </div>
    </div>
  );
};

export default HomeDashboard;

*

import React from "react";
import { Link } from "react-router-dom";

const HomeDashboard = () => {
  return (
    <div>
      <h1 className="mb-4">Product Management Dashboard</h1>
      <div className="list-group">
        <Link
          to="/getAllProductsComponent"
          className="list-group-item list-group-item-action"
        >
          View All Products
        </Link>
        <Link
          to="/get-product-by-id/5"
          className="list-group-item list-group-item-action"
        >
          Get Product By ID
        </Link>
        <Link
          to="/CreateProductComponent"
          className="list-group-item list-group-item-action"
        >
          Create New Product
        </Link>
        <Link
          to="/update-product/5"
          className="list-group-item list-group-item-action"
        >
          Update Product
        </Link>
        <Link
          to="/delete-product/5"
          className="list-group-item list-group-item-action"
        >
          Delete Product
        </Link>
      </div>
    </div>
  );
};

export default HomeDashboard;
*

import React from "react";
import { Link } from "react-router-dom";
//import image from "./image.jpg"; // Import your image here

const HomeDashboard = () => {
  return (
    <div className="container">
      <h1 className="title mb-4 ">Product Management Dashboard</h1>
      <div className="list-group">
        <Link
          to="/getAllProductsComponent"
          className="list-group-item list-group-item-action"
        >
          View All Products
        </Link>
        <Link
          to="/get-product-by-id/5"
          className="list-group-item list-group-item-action"
        >
          Get Product By ID
        </Link>
        <Link
          to="/CreateProductComponent"
          className="list-group-item list-group-item-action"
        >
          Create New Product
        </Link>
        <Link
          to="/update-product/5"
          className="list-group-item list-group-item-action"
        >
          Update Product
        </Link>
        <Link
          to="/delete-product/5"
          className="list-group-item list-group-item-action"
        >
          Delete Product
        </Link>
      </div>
      <div className="image-container">
        <img
          src={
            "https://www.shutterstock.com/image-illustration/product-management-concept-image-text-260nw-1764052046.jpg"
          }
          alt="Product Image"
          className="image"
        />
      </div>
    </div>
  );
};

export default HomeDashboard;

*/

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeDashboard = () => {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/HomePage");
  }

  return (
    <div className="container">
      <h1 className="title">Product Management Dashboard</h1>
      <div className="list-group">
        <Link to="/getAllProductsComponent">
          <button className="button">View All Products</button>
        </Link>

        <Link to="/CreateProductComponent">
          <button className="button">Create New Product</button>
        </Link>
      </div>
      <div className="image-container">
        <img
          src={
            "https://mindlercareerlibrarynew.imgix.net/28C-Product_Management.png"
          }
          alt="Product Image"
          className="image"
        />

        <button onClick={buttonClick}>Back</button>
      </div>
    </div>
  );
};

export default HomeDashboard;
