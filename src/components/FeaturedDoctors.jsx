import doctors from "../data/doctors";
import DoctorCard from "./DoctorCard";

import "./Doctors.css";

function FeaturedDoctors() {
  return (
    <section className="premium-doctors-section">

      <div className="premium-doctors-heading">

        <div>
          <span className="section-label">
            OUR MEDICAL TEAM
          </span>

          <h2>
            Meet Our
            <span> Doctors</span>
          </h2>
        </div>

        <p>
          Meet the qualified doctors of
          NK Hospital.
        </p>

      </div>

      <div className="premium-doctors-grid">

        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedDoctors;