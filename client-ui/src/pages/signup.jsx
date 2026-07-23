import { useState } from "react";
import { showSuccess } from "../utils/toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({

    fullName: "",

    email: "",

    password: "",

    confirmPassword: "",

    role: "",

  });
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

    // Full Name
    if (!formData.fullName.trim()) {

      newErrors.fullName = "Full name is required.";

    }

    // Email
    if (!formData.email.trim()) {

      newErrors.email = "Email is required.";

    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {

      newErrors.email = "Enter a valid email.";

    }

    // Password
    if (!formData.password) {

      newErrors.password = "Password is required.";

    } else if (formData.password.length < 8) {

      newErrors.password = "Password must be at least 8 characters.";

    }

    // Confirm Password
    if (!formData.confirmPassword) {

      newErrors.confirmPassword = "Confirm your password.";

    } else if (formData.password !== formData.confirmPassword) {

      newErrors.confirmPassword = "Passwords do not match.";

    }

    // Role
    if (!formData.role) {

      newErrors.role = "Please select a role.";

    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

      showSuccess("Account created successfully.");

    }

  };

  const [errors, setErrors] = useState({});


  return (
    <div className="signup-container">

      <div className="signup-card">

        <h2>Sign up</h2>
        <p>Join Saphari Today</p>

        <form onSubmit={handleSubmit}>

          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full name" className={errors.fullName ? "input-error" : ""} />
          {errors.fullName && (
            <p className="error-textMasg">
              {errors.fullName}
            </p>
          )}
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className={errors.email ? "input-error" : ""} />
          {errors.email && (
            <p className="error-textMasg">
              {errors.email}
            </p>
          )}


          <div className="password-field">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
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


          <div className="password-field">

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={errors.confirmPassword ? "input-error" : ""}
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          {errors.confirmPassword && (
            <p className="error-textMasg">
              {errors.confirmPassword}
            </p>
          )}


          <select name="role" value={formData.role} onChange={handleChange} >
            <option value="">Select Role</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
          {errors.role && (
            <p className="error-textMasg">
              {errors.role}
            </p>
          )}

          <button
            type="submit"
            className="button"
          >
            Sign Up
          </button>

        </form>

        <p className="login-text">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;



