
import { Link, NavLink } from "react-router-dom";

import {
  FaArrowRight,
  FaHospital,
  FaHeartPulse,
} from "react-icons/fa6";

function Navbar() {
  return (
    <header className="site-header premium-header">
      <nav className="navbar premium-navbar">

        <Link to="/" className="navbar-logo premium-brand">
          <span className="premium-brand-mark">
            <FaHospital className="brand-hospital-icon" />
            <span className="brand-cross">+</span>
          </span>

          <span className="premium-brand-copy">
            <span className="premium-brand-name">
              N<span>K</span>
            </span>

            <span className="premium-brand-subtitle">
              H O S P I T A L
            </span>

            <span className="premium-brand-tagline">
              YOUR HEALTH, OUR PRIORITY
            </span>
          </span>
        </Link>

        <div className="navbar-links premium-nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `premium-nav-link ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              `premium-nav-link ${isActive ? "active" : ""}`
            }
          >
            Doctors
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `premium-nav-link ${isActive ? "active" : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `premium-nav-link ${isActive ? "active" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>

        <Link
          to="/login"
          className="navbar-appointment premium-nav-cta"
        >
          <span className="nav-cta-icon">
            <FaHeartPulse />
          </span>

          <span>Book Appointment</span>

          <FaArrowRight className="nav-cta-arrow" />
        </Link>

      </nav>
    </header>
  );
}

export default Navbar;
