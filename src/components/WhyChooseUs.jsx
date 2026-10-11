const reasons = [
  {
    title: "Experienced Medical Team",
    description:
      "Our healthcare team focuses on providing professional and compassionate care.",
  },
  {
    title: "Patient-Centered Care",
    description:
      "We put every patient's comfort, safety, and needs at the center of our care.",
  },
  {
    title: "Modern Healthcare",
    description:
      "We aim to provide quality healthcare supported by modern medical practices.",
  },
  {
    title: "Easy Appointments",
    description:
      "Book your appointment through a simple and convenient online process.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="section-heading">
        <h2>Why Choose NK Hospital?</h2>

        <p>
          Quality healthcare with compassion, expertise and trust.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((reason) => (
          <div className="why-card" key={reason.title}>
            <h3>{reason.title}</h3>

            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;