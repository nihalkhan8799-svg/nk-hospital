import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCalendarCheck,
  FaShieldHeart,
  FaClock,
} from "react-icons/fa6";

function AppointmentCTA() {
  return (
    <section className="premium-appointment-cta">

      <div className="cta-glow cta-glow-one"></div>
      <div className="cta-glow cta-glow-two"></div>

      <div className="cta-grid-pattern"></div>

      <div className="premium-cta-container">

        <div className="premium-cta-content">

          <span className="cta-label">
            <span className="cta-label-dot"></span>
            NK HOSPITAL
          </span>

          <h2>
            Take the Next Step
            <span> Towards Better Care.</span>
          </h2>

          <p>
            Book your appointment with NK Hospital
            through our simple and convenient
            appointment process.
          </p>

          <Link
            to="/login"
            className="premium-cta-button"
          >
            <span>
              Book an Appointment
            </span>

            <FaArrowRight />
          </Link>

        </div>

        <div className="premium-cta-visual">

          <div className="cta-orbit cta-orbit-one"></div>
          <div className="cta-orbit cta-orbit-two"></div>

          <div className="cta-main-card">

            <div className="cta-card-icon">
              <FaCalendarCheck />
            </div>

            <div className="cta-card-content">
              <span>
                APPOINTMENT FEE
              </span>

              <strong>
                ₹50
              </strong>

              <small>
                Per appointment
              </small>
            </div>

          </div>

          <div className="cta-floating-card cta-floating-top">

            <div className="cta-floating-icon">
              <FaClock />
            </div>

            <div>
              <strong>
                9 AM – 9 PM
              </strong>

              <span>
                Opening Hours
              </span>
            </div>

          </div>

          <div className="cta-floating-card cta-floating-bottom">

            <div className="cta-floating-icon">
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

        </div>

      </div>

    </section>
  );
}

export default AppointmentCTA;