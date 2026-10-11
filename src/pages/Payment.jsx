import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import {
  FaMobileScreenButton,
  FaCreditCard,
  FaLock,
  FaArrowRight,
} from "react-icons/fa6";

import { useAppointment } from "../context/AppointmentContext";

function Payment() {
  const { appointment } = useAppointment();
  const navigate = useNavigate();

  const [method, setMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");

  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  function handleCardChange(event) {
    const { name, value } = event.target;

    setCardData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handlePayment(event) {
    event.preventDefault();

    if (!appointment) {
      alert("Appointment details not found.");
      navigate("/appointment");
      return;
    }

    if (method === "upi") {
      if (!upiId.trim()) {
        alert("Please enter your UPI ID.");
        return;
      }

      navigate("/receipt", {
        state: {
          paymentMethod: "UPI",
        },
      });

      return;
    }

    if (
      !cardData.name.trim() ||
      !cardData.cardNumber.trim() ||
      !cardData.expiry.trim() ||
      !cardData.cvv.trim()
    ) {
      alert("Please fill all card details.");
      return;
    }

    navigate("/receipt", {
      state: {
        paymentMethod: "Credit / Debit Card",
      },
    });
  }

  if (!appointment) {
    return (
      <main className="payment-page">
        <section className="payment-container payment-empty">

          <div className="payment-empty-icon">
            <FaCreditCard />
          </div>

          <span className="payment-header-label">
            NK HOSPITAL
          </span>

          <h1>Appointment Not Found</h1>

          <p>
            Please book an appointment before continuing
            to the payment page.
          </p>

          <button
            className="payment-button"
            onClick={() => navigate("/appointment")}
          >
            Book Appointment
            <FaArrowRight />
          </button>

        </section>
      </main>
    );
  }

  return (
    <main className="payment-page">

      <section className="payment-container">

        {/* HEADER */}
        <div className="payment-header">

          <span className="payment-header-label">
            NK HOSPITAL
          </span>

          <h1>
            Complete Your Payment
          </h1>

          <p>
            Secure your appointment by completing
            the payment of ₹50.
          </p>

        </div>

        {/* APPOINTMENT SUMMARY */}
        <div className="payment-appointment-summary">

          <div className="payment-summary-heading">
            <div>
              <span>APPOINTMENT</span>
              <h2>Appointment Details</h2>
            </div>
          </div>

          <div className="payment-details-grid">

            <div className="payment-detail">
              <span>Patient Name</span>
              <strong>{appointment.patientName}</strong>
            </div>

            <div className="payment-detail">
              <span>Phone Number</span>
              <strong>{appointment.phone}</strong>
            </div>

            <div className="payment-detail">
              <span>Appointment Date</span>
              <strong>{appointment.date}</strong>
            </div>

            <div className="payment-detail">
              <span>Appointment Time</span>
              <strong>{appointment.time}</strong>
            </div>

            {appointment.reason && (
              <div className="payment-detail payment-detail-full">
                <span>Reason for Visit</span>
                <strong>{appointment.reason}</strong>
              </div>
            )}

          </div>

        </div>

        {/* PAYMENT CONTENT */}
        <div className="payment-content">

          {/* LEFT SUMMARY */}
          <div className="payment-summary">

            <span className="payment-summary-label">
              PAYMENT SUMMARY
            </span>

            <h2>
              Appointment Fee
            </h2>

            <div className="payment-summary-row">

              <span>
                Consultation / Appointment
              </span>

              <strong>
                ₹50
              </strong>

            </div>

            <div className="payment-summary-line"></div>

            <div className="payment-total">

              <span>
                Total Amount
              </span>

              <strong>
                ₹50
              </strong>

            </div>

            <div className="payment-trust-box">

              <FaLock />

              <div>
                <strong>
                  Secure Payment
                </strong>

                <span>
                  Your payment information is handled
                  through this secure interface.
                </span>
              </div>

            </div>

          </div>

          {/* RIGHT PAYMENT FORM */}
          <form
            className="payment-form"
            onSubmit={handlePayment}
          >

            <div className="payment-form-heading">

              <span>
                PAYMENT METHOD
              </span>

              <h2>
                Choose how you want to pay
              </h2>

            </div>

            <div className="payment-methods">

              {/* UPI */}
              <label
                className={`payment-method ${
                  method === "upi" ? "active" : ""
                }`}
              >

                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={method === "upi"}
                  onChange={() => setMethod("upi")}
                />

                <div className="payment-method-icon">
                  <FaMobileScreenButton />
                </div>

                <div className="payment-method-content">

                  <strong>
                    UPI
                  </strong>

                  <small>
                    Pay using your UPI app
                  </small>

                </div>

              </label>

              {/* UPI FIELD */}
              {method === "upi" && (
                <div className="payment-extra-field">

                  <label htmlFor="upiId">
                    UPI ID
                  </label>

                  <input
                    id="upiId"
                    type="text"
                    placeholder="example@upi"
                    value={upiId}
                    onChange={(event) =>
                      setUpiId(event.target.value)
                    }
                  />

                </div>
              )}

              {/* CARD */}
              <label
                className={`payment-method ${
                  method === "card" ? "active" : ""
                }`}
              >

                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={method === "card"}
                  onChange={() => setMethod("card")}
                />

                <div className="payment-method-icon">
                  <FaCreditCard />
                </div>

                <div className="payment-method-content">

                  <strong>
                    Credit / Debit Card
                  </strong>

                  <small>
                    Pay securely using your card
                  </small>

                </div>

              </label>

            </div>

            {/* CARD FIELDS */}
            {method === "card" && (
              <div className="card-fields">

                <div className="payment-extra-field">
                  <label htmlFor="cardName">
                    Cardholder Name
                  </label>

                  <input
                    id="cardName"
                    name="name"
                    type="text"
                    placeholder="Enter cardholder name"
                    value={cardData.name}
                    onChange={handleCardChange}
                  />
                </div>

                <div className="payment-extra-field">
                  <label htmlFor="cardNumber">
                    Card Number
                  </label>

                  <input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    inputMode="numeric"
                    placeholder="1234 5678 9012 3456"
                    value={cardData.cardNumber}
                    onChange={handleCardChange}
                  />
                </div>

                <div className="card-row">

                  <div className="payment-extra-field">

                    <label htmlFor="expiry">
                      Expiry Date
                    </label>

                    <input
                      id="expiry"
                      name="expiry"
                      type="text"
                      placeholder="MM/YY"
                      value={cardData.expiry}
                      onChange={handleCardChange}
                    />

                  </div>

                  <div className="payment-extra-field">

                    <label htmlFor="cvv">
                      CVV
                    </label>

                    <input
                      id="cvv"
                      name="cvv"
                      type="password"
                      inputMode="numeric"
                      placeholder="•••"
                      value={cardData.cvv}
                      onChange={handleCardChange}
                    />

                  </div>

                </div>

              </div>
            )}

            {/* PAYMENT BUTTON */}
            <button
              type="submit"
              className="payment-button"
            >
              <span>
                Pay ₹50
              </span>

              <FaArrowRight />
            </button>

            {/* SECURITY */}
            <p className="payment-security">

              <FaLock />

              <span>
                Secure payment interface
              </span>

            </p>

          </form>

        </div>

      </section>

    </main>
  );
}

export default Payment;