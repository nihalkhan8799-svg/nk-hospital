import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaCheck,
  FaUserLock,
  FaEnvelope,
  FaLock,
} from "react-icons/fa6";

import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    login(email, password);

    navigate("/appointment");
  }

  return (
    <main className="login-page">

      <section className="login-container">

        {/* LEFT SIDE */}
        <div className="login-intro">

          <span className="login-intro-label">
            NK HOSPITAL
          </span>

          <h1>
            Your Health,
            <span> Our Priority</span>
          </h1>

          <p>
            Login to your NK Hospital account to
            continue with your appointment.
          </p>


          {/* LOGIN BENEFITS */}
          <div className="login-intro-points">

            {/* POINT 1 */}
            <div>

              <span className="login-point-icon">
                <FaCheck />
              </span>

              <div>
                <strong>
                  Easy Appointment
                </strong>

                <small>
                  Book your appointment through
                  our simple process.
                </small>
              </div>

            </div>


            {/* POINT 2 */}
            <div>

              <span className="login-point-icon">
                <FaCheck />
              </span>

              <div>
                <strong>
                  Patient Focused
                </strong>

                <small>
                  Your healthcare journey starts
                  with NK Hospital.
                </small>
              </div>

            </div>


            {/* POINT 3 */}
            <div>

              <span className="login-point-icon">
                <FaCheck />
              </span>

              <div>
                <strong>
                  Convenient Access
                </strong>

                <small>
                  Access your appointment process
                  anytime.
                </small>
              </div>

            </div>

          </div>

        </div>


        {/* LOGIN CARD */}
        <div className="login-card">

          <div className="login-header">

            <div className="login-icon">
              <FaUserLock />
            </div>

            <h2>
              Welcome Back
            </h2>

            <p>
              Login to continue your appointment
            </p>

          </div>


          {/* LOGIN FORM */}
          <form
            className="login-form"
            onSubmit={handleSubmit}
          >

            {/* EMAIL */}
            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <div className="login-input-wrapper">

                <FaEnvelope className="login-input-icon" />

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                />

              </div>

            </div>


            {/* PASSWORD */}
            <div className="form-group">

              <label htmlFor="password">
                Password
              </label>

              <div className="login-input-wrapper">

                <FaLock className="login-input-icon" />

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                />

              </div>

            </div>


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-button"
            >
              Login to Account
            </button>

          </form>


          {/* DIVIDER */}
          <div className="login-divider">
            <span>
              OR
            </span>
          </div>


          {/* REGISTER */}
          <div className="login-footer">

            <p>
              Don't have an account?

              <Link to="/register">
                {" "}Create Account
              </Link>
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Login;