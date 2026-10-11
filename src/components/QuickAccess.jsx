import { Link } from "react-router-dom";

import {
  FaUserDoctor,
  FaCalendarCheck,
  FaPhone,
} from "react-icons/fa6";

import { MdAccessTime } from "react-icons/md";

function QuickAccess() {
  return (
    <section className="quick-access">
      <div className="quick-access-grid">

        {/* DOCTORS */}
        <Link
          to="/doctors"
          className="quick-access-card"
        >
          <div className="quick-access-icon">
            <FaUserDoctor />
          </div>

          <div>
            <h3>Our Doctors</h3>
            <p>Meet our medical team</p>
          </div>
        </Link>

        {/* APPOINTMENT */}
        <Link
          to="/appointment"
          className="quick-access-card"
        >
          <div className="quick-access-icon">
            <FaCalendarCheck />
          </div>

          <div>
            <h3>Book Appointment</h3>
            <p>Schedule your visit</p>
          </div>
        </Link>

        {/* CONTACT */}
        <Link
          to="/contact"
          className="quick-access-card"
        >
          <div className="quick-access-icon">
            <FaPhone />
          </div>

          <div>
            <h3>Contact Us</h3>
            <p>Get in touch with us</p>
          </div>
        </Link>

        {/* HOURS */}
        <div className="quick-access-card">
          <div className="quick-access-icon">
            <MdAccessTime />
          </div>

          <div>
            <h3>Opening Hours</h3>
            <p>9 AM – 9 PM</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default QuickAccess;