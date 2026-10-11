import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaUserDoctor,
  FaCalendarCheck,
} from "react-icons/fa6";

import doctors from "../data/doctors";

function Doctors() {
  return (
    <main className="doctors-page">

      {/* HERO */}

      <section className="doctors-page-hero">

        <div className="doctors-hero-glow"></div>

        <div className="doctors-page-container">

          <div className="doctors-page-hero-content">

            <span className="doctors-page-label">
              <FaUserDoctor />
              OUR MEDICAL TEAM
            </span>

            <h1>
              Meet Our
              <span> Doctors</span>
            </h1>

            <p>
              Meet the qualified doctors of NK Hospital
              dedicated to patient-focused healthcare.
            </p>

            <div className="doctors-hero-actions">

              <Link
                to="/login"
                className="doctors-hero-button"
              >
                <span>
                  Book Appointment
                </span>

                <FaArrowRight />
              </Link>

            </div>

          </div>

          <div className="doctors-page-hero-card">

            <div className="doctors-hero-card-icon">
              <FaUserDoctor />
            </div>

            <strong>
              {doctors.length}
            </strong>

            <span>
              Qualified Doctors
            </span>

            <small>
              NK Hospital Medical Team
            </small>

          </div>

        </div>

      </section>


      {/* DOCTORS */}

      <section className="doctors-page-list">

        <div className="doctors-page-container">

          <div className="doctors-list-heading">

            <div>

              <span className="section-label">
                NK HOSPITAL
              </span>

              <h2>
                Our Medical
                <span> Team</span>
              </h2>

            </div>

            <p>
              Explore the doctors currently listed
              at NK Hospital.
            </p>

          </div>


          <div className="doctors-page-grid">

            {doctors.map((doctor) => (

              <article
                className="doctors-page-card"
                key={doctor.id}
              >

                <div className="doctors-page-image">

                  <img
                    src={doctor.image}
                    alt={`${doctor.name} - NK Hospital`}
                  />

                  <div className="doctors-page-image-overlay"></div>

                  <span className="doctors-page-qualification">
                    {doctor.qualification}
                  </span>

                </div>


                <div className="doctors-page-card-content">

                  <span className="doctors-page-card-label">
                    NK HOSPITAL
                  </span>

                  <h3>
                    {doctor.name}
                  </h3>

                  <p>
                    Qualified medical professional at
                    NK Hospital.
                  </p>

                  <div className="doctors-page-card-footer">

                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="doctors-view-button"
                    >
                      <span>
                        View Profile
                      </span>

                      <FaArrowRight />
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* BOTTOM CTA */}

      <section className="doctors-page-cta">

        <div className="doctors-page-container">

          <div className="doctors-cta-inner">

            <div>

              <span>
                NK HOSPITAL
              </span>

              <h2>
                Ready to book
                your appointment?
              </h2>

            </div>

            <Link
              to="/login"
              className="doctors-cta-button"
            >
              <FaCalendarCheck />

              <span>
                Book Appointment
              </span>

              <FaArrowRight />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Doctors;