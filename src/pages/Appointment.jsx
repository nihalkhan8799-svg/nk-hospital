import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { useAppointment } from "../context/AppointmentContext";
import "./Appointment.css";
function Appointment() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { saveAppointment } = useAppointment();

  const [formData, setFormData] = useState({
    patientName: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    if (
      !formData.patientName ||
      !formData.phone ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill all required fields.");
      return;
    }

    saveAppointment(formData);

    navigate("/payment");
  }

  return (
    <main className="premium-appointment-page">

      <section className="appointment-hero">

        <div className="appointment-container">

          <div className="appointment-hero-content">

            <span className="appointment-hero-label">
              NK HOSPITAL · APPOINTMENT
            </span>

            <h1>
              Book Your
              <span> Appointment.</span>
            </h1>

            <p>
              Schedule your appointment with NK Hospital
              through our simple and convenient booking
              process.
            </p>

          </div>

          <div className="appointment-hero-status">
            <strong>Patient Focused</strong>
            <span>Care & trust</span>
          </div>

        </div>

      </section>


      <section className="appointment-main-section">

        <div className="appointment-container">

          <div className="appointment-layout">

            <aside className="appointment-info-panel">

              <div className="appointment-info-top">

                <span>NK HOSPITAL</span>

                <h2>
                  Your Healthcare
                  <strong> Starts Here.</strong>
                </h2>

                <p>
                  Complete the form to schedule your
                  appointment. You will continue to
                  payment after submitting the details.
                </p>

              </div>


              <div className="appointment-info-list">

                <div className="appointment-info-item">
                  <div className="appointment-info-icon">
                    01
                  </div>

                  <div>
                    <strong>Opening Hours</strong>
                    <span>9 AM – 9 PM</span>
                  </div>
                </div>


                <div className="appointment-info-item">
                  <div className="appointment-info-icon">
                    02
                  </div>

                  <div>
                    <strong>Appointment Fee</strong>
                    <span>₹50 per appointment</span>
                  </div>
                </div>


                <div className="appointment-info-item">
                  <div className="appointment-info-icon">
                    03
                  </div>

                  <div>
                    <strong>Patient Focused</strong>
                    <span>Care & trust</span>
                  </div>
                </div>

              </div>


              <div className="appointment-process">

                <span className="appointment-process-label">
                  BOOKING PROCESS
                </span>

                <div className="appointment-process-step active">

                  <div className="process-number">
                    01
                  </div>

                  <div>
                    <strong>Appointment Details</strong>
                    <span>Fill in your information</span>
                  </div>

                </div>


                <div className="appointment-process-line"></div>


                <div className="appointment-process-step">

                  <div className="process-number">
                    02
                  </div>

                  <div>
                    <strong>Payment</strong>
                    <span>Pay the ₹50 appointment fee</span>
                  </div>

                </div>


                <div className="appointment-process-line"></div>


                <div className="appointment-process-step">

                  <div className="process-number">
                    03
                  </div>

                  <div>
                    <strong>Confirmation</strong>
                    <span>Receive your appointment receipt</span>
                  </div>

                </div>

              </div>

            </aside>


            <div className="appointment-form-card">

              <div className="appointment-form-header">

                <div className="appointment-form-icon">
                  +
                </div>

                <div>
                  <span>APPOINTMENT DETAILS</span>

                  <h2>
                    Schedule Your Visit
                  </h2>

                  <p>
                    Please provide the required
                    information below.
                  </p>
                </div>

              </div>


              <form
                className="premium-appointment-form"
                onSubmit={handleSubmit}
              >

                <div className="appointment-form-section">

                  <div className="appointment-section-heading">

                    <div className="appointment-section-number">
                      01
                    </div>

                    <div>
                      <span>PATIENT DETAILS</span>
                      <h3>Your Information</h3>
                    </div>

                  </div>


                  <div className="appointment-field">

                    <label htmlFor="patientName">
                      Patient Name
                    </label>

                    <div className="appointment-input-wrapper">

                      <input
                        id="patientName"
                        name="patientName"
                        type="text"
                        placeholder="Enter patient name"
                        value={formData.patientName}
                        onChange={handleChange}
                      />

                    </div>

                  </div>


                  <div className="appointment-field">

                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <div className="appointment-input-wrapper">

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />

                    </div>

                  </div>

                </div>


                <div className="appointment-form-section">

                  <div className="appointment-section-heading">

                    <div className="appointment-section-number">
                      02
                    </div>

                    <div>
                      <span>VISIT DETAILS</span>
                      <h3>Choose Your Schedule</h3>
                    </div>

                  </div>


                  <div className="appointment-field-row">

                    <div className="appointment-field">

                      <label htmlFor="date">
                        Appointment Date
                      </label>

                      <div className="appointment-input-wrapper">

                        <input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                        />

                      </div>

                    </div>


                    <div className="appointment-field">

                      <label htmlFor="time">
                        Appointment Time
                      </label>

                      <div className="appointment-input-wrapper">

                        <input
                          id="time"
                          name="time"
                          type="time"
                          value={formData.time}
                          onChange={handleChange}
                        />

                      </div>

                    </div>

                  </div>


                  <div className="appointment-field">

                    <label htmlFor="reason">
                      Reason for Visit
                      <span>Optional</span>
                    </label>

                    <div className="appointment-input-wrapper">

                      <textarea
                        id="reason"
                        name="reason"
                        rows="4"
                        placeholder="Briefly describe your reason for visit"
                        value={formData.reason}
                        onChange={handleChange}
                      />

                    </div>

                  </div>

                </div>


                <div className="appointment-fee-box">

                  <div className="appointment-fee-icon">
                    ₹
                  </div>

                  <div className="appointment-fee-content">

                    <span>APPOINTMENT FEE</span>

                    <strong>₹50</strong>

                    <small>
                      Per appointment
                    </small>

                  </div>

                  <div className="appointment-fee-check">
                    ✓
                  </div>

                </div>


                <button
                  type="submit"
                  className="premium-appointment-submit"
                >
                  <span>
                    Continue to Payment
                  </span>

                  <span>→</span>
                </button>


                <div className="appointment-secure-note">
                  Your appointment details are handled
                  through this secure booking interface.
                </div>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Appointment;