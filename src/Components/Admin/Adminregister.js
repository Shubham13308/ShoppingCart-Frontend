import React, { useState } from "react";
import "../../css/Admin/admin.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../../Auth/Matcher";

const Adminregister = () => {
  const [formdata, setFormData] = useState({
    admin_username: "",
    admin_password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formdata,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASEURL}/users/admin-register`, {
        admin_username: formdata.admin_username,
        admin_password: formdata.admin_password,
      });
      if (response.data) {
        alert("Registration successful!");
        navigate("/");

      }
    } catch (error) {
      console.error("Error registering admin:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleRegister}>
        <h2>Signup</h2>
        <div className="input-field">
          <input
            type="text"
            name="admin_username"
            value={formdata.admin_username}
            onChange={handleChange}
            required
          />
          <label>Enter your username</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            name="admin_password"
            value={formdata.admin_password}
            onChange={handleChange}
            required
          />
          <label>Enter your password</label>
        </div>
        <div className="forget">
          <label htmlFor="remember">
            <input
              type="checkbox"
              id="remember"
              name="rememberMe"
              checked={formdata.rememberMe}
              onChange={handleChange}
            />
            <p>Remember me</p>
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Create</button>
        <div className="register">
          <p>
            Have an account?{" "}
            <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Adminregister;
