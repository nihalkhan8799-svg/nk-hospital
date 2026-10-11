import { Link } from "react-router-dom";

import {
  FaHospital,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="premium-footer">

      <div className="footer-glow"></div>

      <div className="premium-footer-container">

        {/* TOP */}

        <div className="premium-footer-top">

          {/* BRAND */}

          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo"
            >
              <span className="footer-logo-icon">
                <FaHospital />
              </span>

              <span className="footer-logo-text">
                <strong>NK</strong>
                <span>HOSPITAL</span>
              </span>
            </Link>

            <p>
              Your Health, Our Priority.
            </p>

            <span className="footer-brand-description">
              Healthcare with care, trust and a
              patient-focused approach.
            </span>

          </div>

          {/* NAVIGATION */}

          <div className="footer-column">

            <h3>
              Explore
            </h3>

            <Link to="/">
              Home
            </Link>

            <Link to="/doctors">
              Doctors
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

          {/* APPOINTMENT */}

          <div className="footer-column">

            <h3>
              Patient Care
            </h3>

            <Link to="/login">
              Book Appointment
            </Link>

            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Create Account
            </Link>

          </div>

          {/* CONTACT */}

          <div className="footer-contact">

            <h3>
              Contact Us
            </h3>

            <a href="tel:9370721670">

              <span className="footer-contact-icon">
                <FaPhone />
              </span>

              <span>
                9370721670
              </span>

            </a>

            <a href="mailto:kingkhan879987@gmail.com">

              <span className="footer-contact-icon">
                <FaEnvelope />
              </span>

              <span>
                kingkhan879987@gmail.com
              </span>

            </a>

            <div>

              <span className="footer-contact-icon">
                <FaLocationDot />
              </span>

              <span>
                Dargha Base Police Station Road,
                Vaijapur, Dist. Aurangabad
              </span>

            </div>

            <div>

              <span className="footer-contact-icon">
                <FaClock />
              </span>

              <span>
                9 AM – 9 PM
              </span>

            </div>

          </div>

        </div>

        {/* CTA STRIP */}

        <div className="footer-appointment-strip">

          <div>

            <span>
              READY TO GET STARTED?
            </span>

            <h3>
              Book your appointment with
              NK Hospital.
            </h3>

          </div>

          <Link
            to="/login"
            className="footer-appointment-button"
          >
            <span>
              Book Appointment
            </span>

            <FaArrowRight />
          </Link>

        </div>

        {/* BOTTOM */}

        <div className="premium-footer-bottom">

          <span>
            © {new Date().getFullYear()} NK Hospital.
            All rights reserved.
          </span>

          <span>
            Your Health, Our Priority
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;