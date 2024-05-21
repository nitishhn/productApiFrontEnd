/*  import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route from react-router-dom
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeDashboard from "./component/HomeDashBoard";
import GetAllProducts from "./component/GetAllProductComponent";
import GetProductById from "./component/GetProductByIdComponent";
import CreateProduct from "./component/CreateProductComponent";
import UpdateProduct from "./component/UpdateProductComponent";
import DeleteProduct from "./component/DeleteProductComponent";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./component/HomePage";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
      <Routes>
        {" "}
    
        <Route exact path="/" component={<Homepage />} />
        <Route exact path="/HomeDashBoard" element={<HomeDashboard />} />
        <Route exact path="/get-all-products" element={<GetAllProducts />} />
        <Route
          exact
          path="/get-product-by-id/:id"
          element={<GetProductById />}
        />
        <Route exact path="/create-product" element={<CreateProduct />} />
        <Route exact path="/update-product/:id" element={<UpdateProduct />} />
        <Route exact path="/delete-product/:id" element={<DeleteProduct />} />
        
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();

*

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeDashboard from "./component/HomeDashBoard";
import GetAllProducts from "./component/GetAllProductComponent";
import GetProductById from "./component/GetProductByIdComponent";
import CreateProduct from "./component/CreateProductComponent";
import UpdateProduct from "./component/UpdateProductComponent";
import DeleteProduct from "./component/DeleteProductComponent";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./component/HomePage"; // Import the Homepage component

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
      <Routes>
        <Route exact path="/" element={<Homepage />} />{" "}
      
        <Route exact path="/HomeDashBoard" element={<HomeDashboard />} />
        <Route exact path="/get-all-products" element={<GetAllProducts />} />
        <Route
          exact
          path="/get-product-by-id/:id"
          element={<GetProductById />}
        />
        <Route exact path="/create-product" element={<CreateProduct />} />
        <Route exact path="/update-product/:id" element={<UpdateProduct />} />
        <Route exact path="/delete-product/:id" element={<DeleteProduct />} />
      
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();



// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeDashboard from "./component/HomeDashBoard";
import GetAllProducts from "./component/GetAllProductComponent";
import GetProductById from "./component/GetProductByIdComponent";
import CreateProduct from "./component/CreateProductComponent";
import UpdateProduct from "./component/UpdateProductComponent";
import DeleteProduct from "./component/DeleteProductComponent";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./component/HomePage"; // Import the Homepage component
import Login from "./component/Login";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        

        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/HomeDashboard" element={<HomeDashboard />} />
        <Route exact path="/get-all-products" element={<GetAllProducts />} />
        <Route
          exact
          path="/get-product-by-id/:id"
          element={<GetProductById />}
        />
        <Route exact path="/create-product" element={<CreateProduct />} />
        <Route exact path="/update-product/:id" element={<UpdateProduct />} />
        <Route exact path="/delete-product/:id" element={<DeleteProduct />} />
        
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();


*/
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import NotFound from "./component/NotFound";
import ProtectedRoute from "./component/ProtectedRoute";
import Login from "./component/Login";
import HomeDashboard from "./component/HomeDashBoard";
import GetAllProducts from "./component/GetAllProductComponent";
import CreateProduct from "./component/CreateProductComponent";
import Homepage from "./component/HomePage";

const routing = (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route
        path="/HomeDashBoard"
        element={
          <ProtectedRoute returnUrl="/HomeDashboard">
            <HomeDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />

      <Route path="*" element={<NotFound />} />

      <Route path="/GetAllProductsComponent" element={<GetAllProducts />} />

      <Route path="/CreateProductComponent" element={<CreateProduct />} />

      <Route path="/HomePage" element={<Homepage />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{routing}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
