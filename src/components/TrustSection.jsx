import {
  FaUserDoctor,
  FaClock,
  FaCalendarCheck,
  FaHeartPulse,
  FaArrowRight,
} from "react-icons/fa6";

function TrustSection() {
  const trustItems = [
    {
      number: "01",
      icon: <FaUserDoctor />,
      title: "Qualified Doctors",
      text: "Meet the qualified doctors of NK Hospital.",
    },
    {
      number: "02",
      icon: <FaClock />,
      title: "9 AM – 9 PM",
      text: "Hospital opening hours for convenient access.",
    },
    {
      number: "03",
      icon: <FaCalendarCheck />,
      title: "Easy Appointment",
      text: "Book your appointment through our website.",
    },
    {
      number: "04",
      icon: <FaHeartPulse />,
      title: "Patient Focused",
      text: "Healthcare with care and a patient-focused approach.",
    },
  ];

  return (
    <section className="premium-trust-section">

      <div className="trust-background-glow"></div>

      <div className="premium-trust-container">

        <div className="premium-trust-heading">

          <div>
            <span className="section-label">
              WHY NK HOSPITAL
            </span>

            <h2>
              Healthcare Built
              <span> Around You</span>
            </h2>
          </div>

          <p>
            At NK Hospital, our approach focuses on
            convenient access, qualified doctors and
            patient-focused healthcare.
          </p>

        </div>

        <div className="premium-trust-grid">

          {trustItems.map((item) => (
            <article
              className="premium-trust-card"
              key={item.number}
            >

              <div className="trust-card-top">

                <span className="trust-number">
                  {item.number}
                </span>

                <div className="trust-icon">
                  {item.icon}
                </div>

              </div>

              <div className="trust-card-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

              <div className="trust-card-bottom">
                <span>
                  NK Hospital
                </span>

                <FaArrowRight />
              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TrustSection;