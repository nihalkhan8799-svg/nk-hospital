import { useState } from "react";

import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa6";

import { MdAccessTime } from "react-icons/md";

import { Link } from "react-router-dom";

import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <main className="contact-page">

      {/* HERO / MAIN CONTACT SECTION */}
      <section className="contact-hero">

        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <span className="contact-badge">
              CONTACT NK HOSPITAL
            </span>

            <h1>
              We're Here
              <span> to Help</span>
            </h1>

            <p className="contact-description">
              Have a question or need assistance?
              Get in touch with NK Hospital.
            </p>

            {/* CONTACT DETAILS */}
            <div className="contact-details">

              <div className="contact-detail-item">

                <div className="contact-icon">
                  <FaLocationDot />
                </div>

                <div>
                  <h3>Our Address</h3>

                  <p>
                    Dargha Base Police Station Road,
                    Vaijapur, Dist. Aurangabad
                  </p>
                </div>

              </div>


              <div className="contact-detail-item">

                <div className="contact-icon">
                  <FaPhone />
                </div>

                <div>
                  <h3>Phone</h3>

                  <p>
                    9370721670
                  </p>
                </div>

              </div>


              <div className="contact-detail-item">

                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h3>Email</h3>

                  <p>
                    kingkhan879987@gmail.com
                  </p>
                </div>

              </div>


              <div className="contact-detail-item">

                <div className="contact-icon">
                  <MdAccessTime />
                </div>

                <div>
                  <h3>Opening Hours</h3>

                  <p>
                    9 AM to 9 PM
                  </p>
                </div>

              </div>

            </div>


            {/* APPOINTMENT BUTTON */}
            <Link
              to="/login"
              className="contact-appointment-btn"
            >
              Book an Appointment

              <span>
                <FaArrowRight />
              </span>
            </Link>

          </div>


          {/* RIGHT SIDE FORM */}
          <div className="contact-form-card">

            <div className="form-heading">

              <span>
                GET IN TOUCH
              </span>

              <h2>
                Contact Us
              </h2>

              <p>
                Send us your message and our team
                will be able to assist you.
              </p>

            </div>


            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />

                </div>

              </div>


              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  placeholder="Write your message..."
                  rows="5"
                  required
                />

              </div>


              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Message

                <span>
                  <FaArrowRight />
                </span>
              </button>


              {submitted && (
                <div className="contact-success">

                  <span>✓</span>

                  <p>
                    Your message has been submitted
                    successfully.
                  </p>

                </div>
              )}

            </form>

          </div>

        </div>

      </section>


      {/* BOTTOM SECTION */}
      <section className="contact-bottom">

        <div className="contact-bottom-container">

          <div>

            <span className="bottom-label">
              NK HOSPITAL
            </span>

            <h2>
              Your Health,
              <span> Our Priority</span>
            </h2>

          </div>


          <div className="bottom-hours">

            <span>
              OPENING HOURS
            </span>

            <strong>
              9 AM – 9 PM
            </strong>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;