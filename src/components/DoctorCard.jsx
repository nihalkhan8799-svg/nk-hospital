import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaUserDoctor,
} from "react-icons/fa6";

function DoctorCard({ doctor }) {
  return (
    <article className="premium-doctor-card">

      <div className="doctor-card-image">

        <img
          src={doctor.image}
          alt={`${doctor.name} - NK Hospital`}
        />

        <div className="doctor-image-overlay"></div>

        <div className="doctor-card-badge">
          {doctor.qualification}
        </div>

      </div>

      <div className="premium-doctor-info">

        <span className="doctor-card-label">
          NK HOSPITAL
        </span>

        <h3>
          {doctor.name}
        </h3>

        <p>
          Qualified medical professional at
          NK Hospital.
        </p>

        <Link
          to={`/doctors/${doctor.id}`}
          className="doctor-profile-button"
        >
          <span>View Profile</span>

          <FaArrowRight />
        </Link>

      </div>

    </article>
  );
}

export default DoctorCard;