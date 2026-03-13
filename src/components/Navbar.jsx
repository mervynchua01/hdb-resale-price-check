import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        FlatFinder SG
      </Link>
      <div className="navbar-links">
        <Link to="/listings" className="navbar-link">
          All Listings
        </Link>
        <Link to="/shortlist" className="navbar-link navbar-link-saved">
          Saved
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
