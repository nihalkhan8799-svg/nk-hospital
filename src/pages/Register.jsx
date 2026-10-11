import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Abhi frontend-only registration
    alert("Account created successfully!");

    navigate("/login");
  }

  return (
    <main className="register-page">
      <section className="register-container">

        {/* LEFT SIDE */}
        <div className="register-intro">
          <span className="register-intro-label">
            NK HOSPITAL
          </span>

          <h1>
            Start Your
            <span> Healthcare Journey</span>
          </h1>

          <p>
            Create your NK Hospital account and
            continue with your appointment booking.
          </p>

          <div className="register-points">
            <div>
              <span>✓</span>
              <div>
                <strong>Easy Booking</strong>
                <small>
                  Book appointments through a simple process.
                </small>
              </div>
            </div>

            <div>
              <span>✓</span>
              <div>
                <strong>Simple Access</strong>
                <small>
                  Create your account and continue easily.
                </small>
              </div>
            </div>

            <div>
              <span>✓</span>
              <div>
                <strong>Patient Focused</strong>
                <small>
                  Your healthcare journey starts with NK Hospital.
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="register-card">

          <div className="register-header">
            <div className="register-icon">
              +
            </div>

            <h2>Create Account</h2>

            <p>
              Register to book your appointment
            </p>
          </div>

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="register-button"
            >
              Create Account
            </button>
          </form>

          <div className="register-footer">
            <p>
              Already have an account?
              <Link to="/login">
                {" "}Login
              </Link>
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Register;