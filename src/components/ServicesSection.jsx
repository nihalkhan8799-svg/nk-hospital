import {
  FaStethoscope,
  FaUserDoctor,
  FaCalendarCheck,
  FaArrowRight,
} from "react-icons/fa6";

function ServicesSection() {
  const services = [
    {
      icon: <FaStethoscope />,
      number: "01",
      title: "Medical Care",
      description:
        "Professional healthcare focused on patient needs.",
    },
    {
      icon: <FaUserDoctor />,
      number: "02",
      title: "Doctor Consultation",
      description:
        "Consult with the qualified doctors at NK Hospital.",
    },
    {
      icon: <FaCalendarCheck />,
      number: "03",
      title: "Appointment Booking",
      description:
        "Book your hospital appointment through our website.",
    },
  ];

  return (
    <section className="premium-services">

      <div className="services-heading">

        <div>
          <span className="section-label">
            OUR SERVICES
          </span>

          <h2>
            Healthcare Services
            <span> Designed Around You</span>
          </h2>
        </div>

        <p>
          Simple and convenient healthcare services
          with a patient-focused approach.
        </p>

      </div>

      <div className="premium-services-grid">

        {services.map((service) => (
          <article
            className="premium-service-card"
            key={service.number}
          >

            <div className="service-card-top">

              <span className="service-number">
                {service.number}
              </span>

              <div className="service-icon">
                {service.icon}
              </div>

            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

            <div className="service-card-bottom">

              <span>
                NK Hospital
              </span>

              <FaArrowRight />

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default ServicesSection;