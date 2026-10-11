import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCalendarCheck,
  FaCheck,
  FaClock,
  FaEnvelope,
  FaHospital,
  FaLocationDot,
  FaPhone,
  FaUserDoctor,
  FaHeartPulse,
} from "react-icons/fa6";

import doctors from "../data/doctors";

import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* =========================
          ABOUT HERO
      ========================= */}

      <section className="about-page-hero">

        <div className="about-hero-glow about-hero-glow-one"></div>
        <div className="about-hero-glow about-hero-glow-two"></div>

        <div className="about-page-container">

          <div className="about-hero-content">

            <span className="about-hero-label">
              <FaHospital />
              ABOUT NK HOSPITAL
            </span>

            <h1>
              Healthcare With
              <span> Care & Trust.</span>
            </h1>

            <p>
              Your Health, Our Priority. NK Hospital
              focuses on providing healthcare with
              care, trust and a patient-focused approach.
            </p>

            <div className="about-hero-actions">

              <Link
                to="/login"
                className="about-hero-button"
              >
                <span>Book Appointment</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/doctors"
                className="about-hero-secondary"
              >
                Meet Our Doctors
              </Link>

            </div>

          </div>

          <div className="about-hero-visual">

            <div className="about-hero-image">

              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=85"
                alt="Modern hospital interior"
              />

              <div className="about-hero-image-overlay"></div>

            </div>

            <div className="about-hero-floating-card">

              <div className="about-floating-icon">
                <FaHeartPulse />
              </div>

              <div>
                <strong>NK HOSPITAL</strong>
                <span>Your Health, Our Priority</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          HOSPITAL INTRODUCTION
      ========================= */}

      <section className="about-intro-section">

        <div className="about-page-container about-intro-grid">

          <div className="about-intro-visual">

            <div className="about-intro-image">

              <img
                src="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&w=1200&q=85"
                alt="Hospital reception and interior"
              />

              <div className="about-intro-overlay"></div>

            </div>

            <div className="about-intro-stat">

              <div className="about-intro-stat-icon">
                <FaUserDoctor />
              </div>

              <div>
                <strong>{doctors.length}</strong>
                <span>Qualified Doctors</span>
              </div>

            </div>

          </div>


          <div className="about-intro-content">

            <span className="section-label">
              WHO WE ARE
            </span>

            <h2>
              A Patient-Focused
              <span> Healthcare Approach</span>
            </h2>

            <p className="about-intro-main">
              NK Hospital is focused on providing
              healthcare with care, trust and a
              patient-focused approach for patients
              and their families.
            </p>

            <p className="about-intro-secondary">
              Our medical team includes qualified
              doctors, while our online appointment
              process is designed to make booking
              convenient for patients.
            </p>

            <div className="about-check-list">

              <div className="about-check-item">
                <span>
                  <FaCheck />
                </span>

                <div>
                  <strong>Patient-focused care</strong>
                  <p>
                    Healthcare with care and trust.
                  </p>
                </div>
              </div>


              <div className="about-check-item">
                <span>
                  <FaCheck />
                </span>

                <div>
                  <strong>Qualified doctors</strong>
                  <p>
                    Meet the medical team of NK Hospital.
                  </p>
                </div>
              </div>


              <div className="about-check-item">
                <span>
                  <FaCheck />
                </span>

                <div>
                  <strong>Convenient appointments</strong>
                  <p>
                    Book your appointment through our website.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          HIGHLIGHTS
      ========================= */}

      <section className="about-highlights-section">

        <div className="about-page-container">

          <div className="about-section-heading">

            <span className="section-label">
              NK HOSPITAL
            </span>

            <h2>
              Simple Healthcare,
              <span> Convenient Access</span>
            </h2>

            <p>
              Key information about NK Hospital
              and its appointment process.
            </p>

          </div>


          <div className="about-highlights-grid">

            <article className="about-highlight-card">

              <div className="about-highlight-icon">
                <FaUserDoctor />
              </div>

              <span>MEDICAL TEAM</span>

              <strong>
                {doctors.length}
              </strong>

              <p>
                Qualified doctors currently listed
                at NK Hospital.
              </p>

            </article>


            <article className="about-highlight-card">

              <div className="about-highlight-icon">
                <FaClock />
              </div>

              <span>OPENING HOURS</span>

              <strong>
                9 AM – 9 PM
              </strong>

              <p>
                Hospital opening hours for convenient
                access.
              </p>

            </article>


            <article className="about-highlight-card">

              <div className="about-highlight-icon">
                <FaCalendarCheck />
              </div>

              <span>APPOINTMENT FEE</span>

              <strong>
                ₹50
              </strong>

              <p>
                Appointment fee per booking.
              </p>

            </article>


            <article className="about-highlight-card">

              <div className="about-highlight-icon">
                <FaHospital />
              </div>

              <span>APPROACH</span>

              <strong>
                Patient Focused
              </strong>

              <p>
                Healthcare with care, trust and
                patient focus.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =========================
          MEDICAL TEAM
      ========================= */}

      <section className="about-team-section">

        <div className="about-page-container">

          <div className="about-section-heading about-team-heading">

            <div>
              <span className="section-label">
                OUR MEDICAL TEAM
              </span>

              <h2>
                Meet Our
                <span> Doctors</span>
              </h2>
            </div>

            <Link
              to="/doctors"
              className="about-team-link"
            >
              <span>View All Doctors</span>
              <FaArrowRight />
            </Link>

          </div>


          <div className="about-team-grid">

            {doctors.map((doctor) => (

              <article
                className="about-team-card"
                key={doctor.id}
              >

                <div className="about-team-image">

                  <img
                    src={doctor.image}
                    alt={`${doctor.name} - NK Hospital`}
                  />

                  <div className="about-team-image-overlay"></div>

                  <span>
                    {doctor.qualification}
                  </span>

                </div>


                <div className="about-team-content">

                  <span>
                    NK HOSPITAL
                  </span>

                  <h3>
                    {doctor.name}
                  </h3>

                  <p>
                    Qualified medical professional
                    at NK Hospital.
                  </p>

                  <Link
                    to={`/doctors/${doctor.id}`}
                    className="about-doctor-button"
                  >
                    <span>View Profile</span>
                    <FaArrowRight />
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT INFORMATION
      ========================= */}

      <section className="about-contact-section">

        <div className="about-page-container">

          <div className="about-contact-card">

            <div className="about-contact-content">

              <span className="section-label">
                FIND NK HOSPITAL
              </span>

              <h2>
                We're Here
                <span> For You.</span>
              </h2>

              <p>
                For appointments and general contact,
                you can reach NK Hospital using the
                information below.
              </p>

              <div className="about-contact-list">

                <div className="about-contact-item">

                  <span>
                    <FaLocationDot />
                  </span>

                  <div>
                    <strong>Address</strong>
                    <p>
                      Dargha Base Police Station Road,
                      Vaijapur, Dist. Aurangabad
                    </p>
                  </div>

                </div>


                <div className="about-contact-item">

                  <span>
                    <FaPhone />
                  </span>

                  <div>
                    <strong>Phone</strong>
                    <p>9370721670</p>
                  </div>

                </div>


                <div className="about-contact-item">

                  <span>
                    <FaEnvelope />
                  </span>

                  <div>
                    <strong>Email</strong>
                    <p>
                      kingkhan879987@gmail.com
                    </p>
                  </div>

                </div>


                <div className="about-contact-item">

                  <span>
                    <FaClock />
                  </span>

                  <div>
                    <strong>Opening Hours</strong>
                    <p>9 AM – 9 PM</p>
                  </div>

                </div>

              </div>

            </div>


            <div className="about-contact-visual">

              <div className="about-contact-icon">
                <FaHospital />
              </div>

              <span>
                NK HOSPITAL
              </span>

              <strong>
                Your Health,
                <br />
                Our Priority.
              </strong>

              <Link
                to="/contact"
                className="about-contact-button"
              >
                <span>Contact Us</span>
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="about-final-cta">

        <div className="about-cta-glow"></div>

        <div className="about-page-container">

          <div className="about-final-cta-inner">

            <div>

              <span>
                NK HOSPITAL
              </span>

              <h2>
                Ready to take the
                <strong> next step?</strong>
              </h2>

              <p>
                Book your appointment through our
                simple online appointment process.
              </p>

            </div>

            <Link
              to="/login"
              className="about-final-button"
            >
              <span>Book Appointment</span>
              <FaCalendarCheck />
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;