import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes, FaShoppingCart, FaHeart, } from "react-icons/fa";
import "../css/navbar.css";

function Navbar({
  cart = [],
  wishlist = [],
}) {

  // Temporary
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef(null);

  const isLoggedIn = false;

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        Saphari
      </Link>
      <button
        className="menu-toggle"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`nav-links ${mobileMenu ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMobileMenu(false)} >Home</Link></li>
        <li><Link to="/about" onClick={() => setMobileMenu(false)} >About</Link></li>
        <li><Link to="/services" onClick={() => setMobileMenu(false)} >Services</Link></li>
        <li><Link to="/portfolio" onClick={() => setMobileMenu(false)} >Portfolio</Link></li>
        <li><Link to="/contact" onClick={() => setMobileMenu(false)} >Contact</Link></li>
      </ul>
      <div className="nav-right">
        <div className="nav-icons">

          <Link className="icon-link" to="/cart">

            <FaShoppingCart />

            {cart.length > 0 && (
              <span className="icon-badge">
                {cart.length}
              </span>
            )}

          </Link>

          <Link className="icon-link" to="/wishlist">

            <FaHeart />

            {wishlist.length > 0 && (
              <span className="icon-badge">
                {wishlist.length}
              </span>
            )}

          </Link>

        </div>
        <div className="profile-menu" ref={menuRef} >
          <FaUserCircle className="profile-icon" onClick={() => setMenuOpen(!menuOpen)} />
          <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
            {!isLoggedIn ? (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)} >
                  Login
                </Link>
                <Link to="/signup" onClick={() => setMenuOpen(false)} >
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" onClick={() => setMenuOpen(false)} >
                  Dashboard
                </Link>
                <button>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;