import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCalendarCheck,
  FaClock,
  FaShieldHeart,
} from "react-icons/fa6";

function HeroSection() {
  return (
    <section className="premium-hero">

      {/* BACKGROUND EFFECTS */}
      <div className="hero-grid"></div>

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>


      <div className="premium-hero-container">

        {/* LEFT CONTENT */}
        <div className="premium-hero-content">

          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot"></span>

            <span>
              NK HOSPITAL
            </span>

            <span className="hero-eyebrow-line"></span>
          </div>


          <h1>
            Your Health,
            <span>Our Priority.</span>
          </h1>


          <p className="premium-hero-description">
            Quality healthcare with care, trust and
            a patient-focused approach for you and
            your family.
          </p>


          {/* BUTTONS */}
          <div className="premium-hero-actions">

            <Link
              to="/login"
              className="hero-primary-button"
            >
              <span>
                Book an Appointment
              </span>

              <FaArrowRight />
            </Link>


            <Link
              to="/doctors"
              className="hero-secondary-button"
            >
              Meet Our Doctors
            </Link>

          </div>


          {/* TRUST ROW */}
          <div className="hero-trust-row">

            <div className="hero-trust-item">

              <div className="hero-trust-icon">
                <FaShieldHeart />
              </div>

              <div>
                <strong>
                  Patient Focused
                </strong>

                <span>
                  Care & trust
                </span>
              </div>

            </div>


            <div className="hero-trust-divider"></div>


            <div className="hero-trust-item">

              <div className="hero-trust-icon">
                <FaClock />
              </div>

              <div>
                <strong>
                  9 AM – 9 PM
                </strong>

                <span>
                  Opening hours
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT VISUAL */}
        <div className="premium-hero-visual">

          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>


          {/* IMAGE */}
          <div className="hero-image-frame">

            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=85"
              alt="Modern hospital"
            />

            <div className="hero-image-overlay"></div>

          </div>


          {/* FLOATING CARD */}
          <div className="hero-floating-card">

            <div className="hero-floating-icon">
              <FaCalendarCheck />
            </div>

            <div>
              <span>
                APPOINTMENT
              </span>

              <strong>
                ₹50
              </strong>

              <small>
                Per appointment
              </small>
            </div>

          </div>


          {/* FLOATING BADGE */}
          <div className="hero-status-card">

            <span className="hero-status-dot"></span>

            <div>
              <strong>
                NK Hospital
              </strong>

              <span>
                Your Health, Our Priority
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM SHAPE */}
      <div className="hero-bottom-fade"></div>

    </section>
  );
}

export default HeroSection;