import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCheck,
  FaUserDoctor,
} from "react-icons/fa6";

function HomeAbout() {
  return (
    <section className="premium-about-section">

      <div className="premium-about-container">

        {/* IMAGE SIDE */}

        <div className="premium-about-visual">

         <div className="about-image-main">
          <img
             src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85"
               alt="NK Hospital consultation room"
              />

          <div className="about-image-overlay"></div>
          </div>

          <div className="about-experience-card">

            <div className="about-experience-icon">
              <FaUserDoctor />
            </div>

            <div>
              <strong>3</strong>
              <span>Qualified Doctors</span>
            </div>

          </div>

          <div className="about-image-decoration"></div>

        </div>


        {/* CONTENT SIDE */}

        <div className="premium-about-content">

          <span className="section-label">
            ABOUT NK HOSPITAL
          </span>

          <h2>
            Healthcare With
            <span> Care & Trust</span>
          </h2>

          <p className="about-main-text">
            NK Hospital is focused on providing
            healthcare with care, trust and a
            patient-focused approach.
          </p>

          <p className="about-secondary-text">
            Our medical team includes qualified
            doctors dedicated to caring for patients
            and supporting their healthcare journey.
          </p>


          <div className="about-points">

            <div className="about-point">

              <span>
                <FaCheck />
              </span>

              <p>
                Patient-focused approach
              </p>

            </div>

            <div className="about-point">

              <span>
                <FaCheck />
              </span>

              <p>
                Qualified medical team
              </p>

            </div>

            <div className="about-point">

              <span>
                <FaCheck />
              </span>

              <p>
                Convenient appointment process
              </p>

            </div>

          </div>


          <div className="about-bottom">

            <div className="about-stat">

              <strong>9 AM – 9 PM</strong>

              <span>
                Opening Hours
              </span>

            </div>

            <div className="about-stat">

              <strong>₹50</strong>

              <span>
                Appointment Fee
              </span>

            </div>

            <Link
              to="/about"
              className="about-premium-button"
            >
              <span>
                Discover More
              </span>

              <FaArrowRight />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HomeAbout;