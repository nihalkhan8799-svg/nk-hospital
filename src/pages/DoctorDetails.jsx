import { Link, useParams } from "react-router-dom";

import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarCheck,
  FaUserDoctor,
  FaGraduationCap,
} from "react-icons/fa6";

import doctors from "../data/doctors";

function DoctorDetails() {
  const { doctorId } = useParams();

  const doctor = doctors.find(
    (item) => String(item.id) === doctorId
  );

  if (!doctor) {
    return (
      <main className="doctor-details-page">

        <section className="doctor-not-found">

          <div className="doctor-not-found-icon">
            <FaUserDoctor />
          </div>

          <span>
            NK HOSPITAL
          </span>

          <h1>
            Doctor Not Found
          </h1>

          <p>
            The requested doctor profile could not
            be found.
          </p>

          <Link
            to="/doctors"
            className="doctor-back-button"
          >
            <FaArrowLeft />
            <span>
              Back to Doctors
            </span>
          </Link>

        </section>

      </main>
    );
  }

  return (
    <main className="doctor-details-page">

      {/* HERO */}

      <section className="doctor-details-hero">

        <div className="doctor-details-glow"></div>

        <div className="doctor-details-container">

          <Link
            to="/doctors"
            className="doctor-details-back"
          >
            <FaArrowLeft />
            <span>
              Back to Doctors
            </span>
          </Link>

          <div className="doctor-profile-layout">

            {/* IMAGE */}

            <div className="doctor-profile-visual">

              <div className="doctor-profile-image">

                <img
                  src={doctor.image}
                  alt={`${doctor.name} - NK Hospital`}
                />

                <div className="doctor-profile-overlay"></div>

              </div>

              <div className="doctor-profile-qualification">
                <FaGraduationCap />

                <div>
                  <span>
                    QUALIFICATION
                  </span>

                  <strong>
                    {doctor.qualification}
                  </strong>
                </div>
              </div>

            </div>


            {/* CONTENT */}

            <div className="doctor-profile-content">

              <span className="doctor-profile-label">
                NK HOSPITAL · MEDICAL TEAM
              </span>

              <h1>
                {doctor.name}
              </h1>

              <div className="doctor-profile-role">
                <FaUserDoctor />

                <span>
                  Qualified Medical Professional
                </span>
              </div>

              <p>
                {doctor.name} is a qualified medical
                professional listed as part of the
                NK Hospital medical team.
              </p>

              <div className="doctor-profile-actions">

                <Link
                  to="/login"
                  className="doctor-book-button"
                >
                  <FaCalendarCheck />

                  <span>
                    Book Appointment
                  </span>

                  <FaArrowRight />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* INFORMATION */}

      <section className="doctor-profile-info">

        <div className="doctor-details-container">

          <div className="doctor-info-heading">

            <span className="section-label">
              DOCTOR PROFILE
            </span>

            <h2>
              About the
              <span> Doctor</span>
            </h2>

          </div>


          <div className="doctor-info-grid">

            <article className="doctor-info-card">

              <div className="doctor-info-icon">
                <FaUserDoctor />
              </div>

              <span>
                DOCTOR
              </span>

              <h3>
                {doctor.name}
              </h3>

              <p>
                Member of the NK Hospital medical team.
              </p>

            </article>


            <article className="doctor-info-card">

              <div className="doctor-info-icon">
                <FaGraduationCap />
              </div>

              <span>
                QUALIFICATION
              </span>

              <h3>
                {doctor.qualification}
              </h3>

              <p>
                Qualification information provided
                for this doctor.
              </p>

            </article>


            <article className="doctor-info-card">

              <div className="doctor-info-icon">
                <FaCalendarCheck />
              </div>

              <span>
                APPOINTMENT
              </span>

              <h3>
                ₹50
              </h3>

              <p>
                Appointment fee at NK Hospital.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="doctor-details-cta">

        <div className="doctor-details-container">

          <div className="doctor-details-cta-inner">

            <div>

              <span>
                NK HOSPITAL
              </span>

              <h2>
                Want to consult with
                our medical team?
              </h2>

            </div>

            <Link
              to="/login"
              className="doctor-details-cta-button"
            >
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

export default DoctorDetails;