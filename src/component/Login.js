import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  function buttonClick() {
    navigate("/HomePage");
  }
  const [uid, setUserId] = useState("nitish");
  const [pwd, setPassword] = useState("nitish123");
  const [result, setResult] = useState("");
  let navigate = useNavigate(); // for navigation using code
  let location = useLocation(); // for reading query string params

  function loginButton_click() {
    // returns the query string from the current url
    const queryString = location.search;
    let strReturnUrl = new URLSearchParams(queryString).get("returnUrl");

    if (strReturnUrl == null) {
      strReturnUrl = "/HomeDashBoard";
    }

    if (uid === "nitish" && pwd === "nitish123") {
      let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
      sessionStorage.setItem("user-token", token);
      navigate(strReturnUrl);
    } else {
      setResult("Invalid User Id or Password");
    }
  }

  return (
    <div className="form-container">
      <h2 className="form-title">User Login</h2>
      <fieldset>
        <div className="form-field">
          <label className="label">User Id:</label>
          <input
            type="text"
            value={uid}
            onChange={(event) => setUserId(event.target.value)}
            className="input"
          />
        </div>
        <div className="form-field">
          <label className="label">Password:</label>
          <input
            type="password"
            value={pwd}
            onChange={(event) => setPassword(event.target.value)}
            className="input"
          />
        </div>
        <input
          type="button"
          value="Login"
          className="button"
          onClick={loginButton_click}
        />
        {result && <p className="error-message">{result}</p>}
      </fieldset>

      <button onClick={buttonClick}>Back</button>
    </div>
  );
}

export default Login;
