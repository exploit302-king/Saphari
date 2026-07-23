import { showSuccess } from "../utils/toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../css/login.css";
function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) {
      return;
    }
    setLoading(true);
    showSuccess("Login successful.");
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Login to your Saphari ccount</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? "input-error" : ""}
            />

            {errors.email && (

              <p className="error-textMasg">
                {errors.email}
              </p>

            )}

          </div>

          <div className="input-group">

            <label>Password</label>

            <div className="password-field">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={errors.password ? "input-error" : ""}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >

                {showPassword ? <FaEyeSlash /> : <FaEye />}

              </button>

            </div>

            {errors.password && (

              <p className="error-textMasg">
                {errors.password}
              </p>

            )}

          </div>

          <button
            type="submit"
            className="button"
            disabled={loading}
          >

            {loading ? "Logging in..." : "Login"}

          </button>

        </form>

        <div className="login-footer">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </div>

      </div>

    </div>
  );
}

export default Login;